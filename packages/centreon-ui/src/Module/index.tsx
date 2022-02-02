import * as React from 'react';

import { Provider as JotaiProvider } from 'jotai';

import { createGenerateClassName, StylesProvider } from '@mui/styles';

import { ThemeProvider } from '..';
import { ThemeMode } from '@centreon/ui-context'
import SnackbarProvider from '../Snackbar/SnackbarProvider';

export interface ModuleProps {
  children: React.ReactElement;
  maxSnackbars: number;
  seedName: string;
  themeMode: ThemeMode;
}

const Module = ({
  children,
  seedName,
  maxSnackbars,
  themeMode,
}: ModuleProps): JSX.Element => {
  const generateClassName = createGenerateClassName({
    seed: seedName,
  });

  return (
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider themeMode={themeMode}>
        <SnackbarProvider maxSnackbars={maxSnackbars}>
          <JotaiProvider scope="ui-context">{children}</JotaiProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default Module;
