/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */

import React from 'react';
import clsx from 'clsx';
import styles from './close-icon.scss';

const IconClose = ({ iconType, iconPosition, onClick, customStyle }) => (
  <span
    className={clsx(
      styles['icon-close'],
      { [styles[`icon-close-${iconType}`]]: true },
      styles[iconPosition || ''],
      styles[customStyle || ''],
    )}
    onClick={onClick}
  />
);

export default IconClose;
