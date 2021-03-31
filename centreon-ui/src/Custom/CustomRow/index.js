/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';

import clsx from 'clsx';

import styles from '../../global-sass-files/_grid.scss';

class CustomRow extends Component {
  render() {
    const { children, additionalStyles, style } = this.props;
    const additionalClasses = [];
    if (additionalStyles) {
      for (let i = 0; i < additionalStyles.length; i++) {
        additionalClasses.push(styles[additionalStyles[i]]);
      }
    }

    return (
      <div
        className={clsx(styles.container__row, additionalClasses)}
        style={style}
      >
        {children}
      </div>
    );
  }
}

export default CustomRow;
