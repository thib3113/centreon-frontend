import * as React from 'react';

import { isEmpty } from 'ramda';

import { UseAutocompleteProps } from '@material-ui/lab';
import { Avatar, Chip } from '@material-ui/core';

import { Props as AutocompleteProps } from '..';
import { SelectEntry } from '../..';
import PopoverMenu from '../../../../PopoverMenu';

type Multiple = boolean;
type DisableClearable = boolean;
type FreeSolo = boolean;

export type Props = Omit<AutocompleteProps, 'renderTags' | 'multiple'> &
  Omit<
    UseAutocompleteProps<SelectEntry, Multiple, DisableClearable, FreeSolo>,
    'multiple'
  >;

const PopoverAutocomplete = (
  AutocompleteField: (props) => JSX.Element,
): ((props) => JSX.Element) => {
  const InnerAutocomplete = ({
    value,
    label,
    onChange,
    ...props
  }: Props): JSX.Element => {
    const [optionsOpen, setOptionsOpen] = React.useState<boolean>(false);

    const icon = (
      <Chip
        avatar={<Avatar>{(value as Array<SelectEntry>).length}</Avatar>}
        color={isEmpty(value) ? undefined : 'primary'}
        label={label}
        size="small"
        style={{ cursor: 'pointer' }}
        onDelete={(e) => onChange?.(e, [], 'clear')}
      />
    );

    const openOptions = (): void => {
      setOptionsOpen(true);
    };

    const closeOptions = (): void => {
      setOptionsOpen(false);
    };

    return (
      <PopoverMenu icon={icon} onClose={closeOptions} onOpen={openOptions}>
        <AutocompleteField
          autoFocus
          disableCloseOnSelect
          multiple
          displayPopupIcon={false}
          open={optionsOpen}
          renderTags={() => null}
          style={{ minWidth: 145 }}
          value={value}
          onChange={onChange}
          {...props}
        />
      </PopoverMenu>
    );
  };

  return InnerAutocomplete;
};

export default PopoverAutocomplete;
