import React from 'react';

import IconSearch from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Cancel';

import TextField, { Props as TextFieldProps } from '../Text';

type Props = Omit<TextFieldProps, 'StartAdornment' | 'EndAdornment'>;

const SearchField = (props: Props): JSX.Element => (
  <TextField
    EndAdornment={(): JSX.Element => <CloseIcon />}
    StartAdornment={(): JSX.Element => <IconSearch />}
    {...props}
  />
);

export default SearchField;
