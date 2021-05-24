/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import clsx from 'clsx';
import styles from './search-live.scss';
import ButtonActionInput from '../../Button/ButtonActionInput';
import '../SearchWithArrow/search-with-arrow.scss';

class SearchLive extends Component {
  onChange = (e) => {
    const { onChange, filterKey } = this.props;
    onChange(e.target.value, filterKey);
  };

  render() {
    const { label, value, icon } = this.props;
    return (
      <div
        className={clsx(styles['search-live'], styles[icon ? 'custom' : ''])}
      >
        {label && (
          <label>
            <b>{label}</b>
          </label>
        )}
        <input type="text" value={value} onChange={this.onChange.bind(this)} />
        {icon ? (
          <ButtonActionInput
            buttonActionType="delete"
            buttonColor="green"
            buttonIconType="arrow-right"
            iconColor="white"
          />
        ) : null}
      </div>
    );
  }
}

export default SearchLive;
