import * as React from 'react';

import { equals, find, map, pick, propEq } from 'ramda';
import { DraggableSyntheticListeners, rectIntersection } from '@dnd-kit/core';
import { rectSortingStrategy } from '@dnd-kit/sortable';

import {
  TableHead,
  TableRow,
  TableCell,
  withStyles,
  makeStyles,
} from '@material-ui/core';

import Checkbox from '../Checkbox';
import { getVisibleColumns, Props as ListingProps } from '..';
import { Column } from '../models';
import SortableItems from '../../SortableItems';

import SortableHeaderCellContent from './SortableCell/Content';

const height = 28;

const HeaderCell = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    height,
    padding: theme.spacing(0, 0, 0, 1.5),
  },
}))(TableCell);

const useStyles = makeStyles((theme) => ({
  compactCell: {
    paddingLeft: theme.spacing(0.5),
  },
  headerLabelDragging: {
    cursor: 'grabbing',
  },
  row: {
    display: 'contents',
  },
}));

type Props = Pick<
  ListingProps<unknown>,
  | 'sortField'
  | 'sortOrder'
  | 'onSort'
  | 'columns'
  | 'checkable'
  | 'onSelectColumns'
  | 'columnConfiguration'
  | 'totalRows'
> & {
  memoProps: Array<unknown>;
  onSelectAllClick: (event) => void;
  rowCount: number;
  selectedRowCount: number;
};

interface ContentProps extends Pick<Props, 'sortField' | 'sortOrder'> {
  attributes;
  id: string;
  isDragging: boolean;
  itemRef: React.RefObject<HTMLDivElement>;
  listeners: DraggableSyntheticListeners;
  style;
}

const ListingHeader = ({
  onSelectAllClick,
  sortOrder,
  sortField,
  selectedRowCount,
  rowCount,
  columns,
  columnConfiguration,
  onSort,
  onSelectColumns,
  checkable,
  memoProps,
}: Props): JSX.Element => {
  const classes = useStyles();

  const visibleColumns = getVisibleColumns({
    columnConfiguration,
    columns,
  });

  const getColumnById = (id: string): Column => {
    return find(propEq('id', id), columns) as Column;
  };

  const Content = ({
    listeners,
    attributes,
    style,
    isDragging,
    itemRef,
    id,
  }: ContentProps) => {
    return (
      <SortableHeaderCellContent
        column={getColumnById(id)}
        columnConfiguration={columnConfiguration}
        isDragging={isDragging}
        itemRef={itemRef}
        sortField={sortField}
        sortOrder={sortOrder}
        style={style}
        onSort={onSort}
        {...listeners}
        {...attributes}
      />
    );
  };

  return (
    <>
      <TableHead className={classes.row} component="div">
        <TableRow className={classes.row} component="div">
          {checkable && (
            <HeaderCell component="div">
              <Checkbox
                checked={selectedRowCount === rowCount}
                className={classes.compactCell}
                indeterminate={
                  selectedRowCount > 0 && selectedRowCount < rowCount
                }
                inputProps={{ 'aria-label': 'Select all' }}
                onChange={onSelectAllClick}
              />
            </HeaderCell>
          )}
          <SortableItems
            updateSortableItemsOnItemsChange
            Content={Content}
            additionalProps={[sortField, sortOrder]}
            collisionDetection={rectIntersection}
            itemProps={['id']}
            items={visibleColumns}
            memoProps={memoProps}
            sortingStrategy={rectSortingStrategy}
            onDragOver={(newItems) => onSelectColumns?.(newItems)}
          />
        </TableRow>
      </TableHead>
    </>
  );
};

const columnMemoProps = [
  'id',
  'label',
  'rowMemoProps',
  'sortField',
  'sortable',
  'type',
];

const MemoizedListingHeader = React.memo<Props & { memoProps: Array<unknown> }>(
  ListingHeader,
  (prevProps, nextProps) =>
    equals(prevProps.sortOrder, nextProps.sortOrder) &&
    equals(prevProps.sortField, nextProps.sortField) &&
    equals(prevProps.selectedRowCount, nextProps.selectedRowCount) &&
    equals(prevProps.rowCount, nextProps.rowCount) &&
    equals(
      map(pick(columnMemoProps), prevProps.columns),
      map(pick(columnMemoProps), nextProps.columns),
    ) &&
    equals(prevProps.checkable, nextProps.checkable) &&
    equals(prevProps.columnConfiguration, nextProps.columnConfiguration) &&
    equals(prevProps.memoProps, nextProps.memoProps),
);

export default MemoizedListingHeader;
export { height as headerHeight, HeaderCell };
