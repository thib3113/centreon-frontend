/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import clsx from 'clsx';
import styles from './submenu.scss';

class SubmenuHeader extends Component {
  render() {
    const { submenuType, children, active, ...props } = this.props;

    return (
      <div
        className={clsx(styles[`submenu-${submenuType}`], {
          [styles['submenu-active']]: !!active,
        })}
        {...props}
      >
        {children}
      </div>
    );
  }
}

export default SubmenuHeader;
