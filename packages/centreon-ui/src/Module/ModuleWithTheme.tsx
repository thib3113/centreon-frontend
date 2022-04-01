import * as React from 'react';

import { Provider as JotaiProvider } from 'jotai';

import { createGenerateClassName, StylesProvider } from '@mui/styles';

import { ThemeMode } from '@centreon/ui-context';

import { StoryBookThemeProvider } from '..';
import SnackbarProvider from '../Snackbar/SnackbarProvider';

export interface ModuleProps {
  children: React.ReactElement;
  maxSnackbars: number;
  seedName: string;
  themeMode: ThemeMode;
}

const ModuleWithTheme = ({
  children,
  seedName,
  maxSnackbars,
  themeMode,
}: ModuleProps): JSX.Element => {
  const generateClassName = createGenerateClassName({
    seed: seedName,
  });

  return (
    <JotaiProvider scope="ui-context">
      <StylesProvider generateClassName={generateClassName}>
        <StoryBookThemeProvider themeMode={themeMode || ThemeMode.light}>
          <SnackbarProvider maxSnackbars={maxSnackbars}>
            {children}
          </SnackbarProvider>
        </StoryBookThemeProvider>
      </StylesProvider>
    </JotaiProvider>
  );
};

export default ModuleWithTheme;
