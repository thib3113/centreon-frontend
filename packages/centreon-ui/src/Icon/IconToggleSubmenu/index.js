/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */

import React from 'react';
import clsx from 'clsx';
import styles from './icon-toggle-submenu.scss';

const IconToggleSubmenu = ({
  iconType,
  iconPosition,
  rotate,
  onClick,
  ...rest
}) => {
  const cn = clsx(
    {
      [styles[`icons-toggle-${iconType}`]]: true,
    },
    styles[iconPosition || ''],
    { [styles['icons-toggle-rotate']]: !!rotate },
  );

  return <span className={cn} onClick={onClick} {...rest} />;
};

export default IconToggleSubmenu;
