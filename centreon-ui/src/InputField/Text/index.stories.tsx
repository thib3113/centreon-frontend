import React from 'react';

import TextField from '.';

export default { title: 'InputField/Text' };

export const withLabelAndHelperText = (): JSX.Element => (
  <TextField helperText="choose a name for current object" label="name" />
);

export const withPlaceholderOnly = (): JSX.Element => (
  <TextField placeholder="name" />
);

export const withError = (): JSX.Element => (
  <TextField error="Wrong name" label="name" />
);

export const fullWidth = (): JSX.Element => (
  <TextField fullWidth label="full width" />
);

export const compact = (): JSX.Element => (
  <TextField compact placeholder="Tiny" />
);

export const transparent = (): JSX.Element => (
  <TextField transparent placeholder="Transparent" />
);
