import * as React from 'react';

import { Provider as JotaiProvider } from 'jotai';

import { createGenerateClassName, StylesProvider } from '@mui/styles';

import { ThemeProvider } from '..';
import SnackbarProvider from '../Snackbar/SnackbarProvider';

export interface ModuleProps {
  children: React.ReactElement;
  maxSnackbars: number;
  seedName: string;
  userTheme: string;
}

const Module = ({
  children,
  seedName,
  maxSnackbars,
  userTheme,
}: ModuleProps): JSX.Element => {
  const generateClassName = createGenerateClassName({
    seed: seedName,
  });

  return (
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider userTheme={userTheme}>
        <SnackbarProvider maxSnackbars={maxSnackbars}>
          <JotaiProvider scope="ui-context">{children}</JotaiProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default Module;
