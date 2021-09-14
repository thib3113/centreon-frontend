import * as React from 'react';

import clsx from 'clsx';

import {
  ClickAwayListener,
  makeStyles,
  Paper,
  Popper,
  PopperPlacementType,
  useTheme,
} from '@material-ui/core';

import { IconButton } from '..';

const useStyles = makeStyles({
  popoverIconButton: {
    padding: 0,
    width: '100%',
  },
});

interface Props {
  children: (props?) => JSX.Element;
  className?: string;
  icon: JSX.Element;
  onClose?: () => void;
  onOpen?: () => void;
  popperPlacement?: PopperPlacementType;
  title?: string;
}

const PopoverMenu = ({
  icon,
  title,
  children,
  popperPlacement,
  onOpen,
  onClose,
  className,
}: Props): JSX.Element => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState();
  const classes = useStyles();

  const isOpen = Boolean(anchorEl);

  const close = (reason?): void => {
    const isClosedByInputClick = reason?.type === 'mousedown';

    if (isClosedByInputClick) {
      return;
    }
    onClose?.();
    setAnchorEl(undefined);
  };

  const toggle = (event): void => {
    if (isOpen) {
      close();

      return;
    }

    onOpen?.();
    setAnchorEl(event.currentTarget);
  };

  return (
    <ClickAwayListener onClickAway={close}>
      <div>
        <IconButton
          ariaLabel={title}
          className={clsx(classes.popoverIconButton, className)}
          title={title}
          onClick={toggle}
        >
          {icon}
        </IconButton>
        <Popper
          anchorEl={anchorEl}
          open={isOpen}
          placement={popperPlacement}
          style={{ zIndex: theme.zIndex.tooltip }}
        >
          <Paper>{children({ close })}</Paper>
        </Popper>
      </div>
    </ClickAwayListener>
  );
};

export default PopoverMenu;
