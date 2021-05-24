/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */

import React from 'react';
import clsx from 'clsx';
import styles from './content-icons.scss';

const IconContent = ({
  iconContentType,
  iconContentColor,
  loading,
  onClick,
  customClass,
}) => (
  <span
    className={clsx(
      styles['content-icon'],
      { [styles[`content-icon-${iconContentType}`]]: true },
      styles[iconContentColor ? `content-icon-${iconContentColor}` : ''],
      styles[loading ? 'loading-animation' : ''],
      styles[customClass || ''],
    )}
    style={loading ? { top: '20%' } : {}}
    onClick={onClick}
  />
);

export default IconContent;
