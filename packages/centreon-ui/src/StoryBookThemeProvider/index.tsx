import React from 'react';

import {
  ThemeProvider as MuiThemeProvider,
  Theme,
  StyledEngineProvider,
  createTheme,
} from '@mui/material';

import { ThemeMode } from '@centreon/ui-context';

import { getTheme } from '../ThemeProvider';

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

declare module '@mui/material/styles/createPalette' {
  interface TypeAction {
    acknowledged: string;
    acknowledgedBackground: string;
    inDowntime: string;
    inDowntimeBackground: string;
  }
}

interface Props {
  children: React.ReactChild;
  themeMode: ThemeMode;
}

const StoryBookThemeProvider = ({
  children,
  themeMode,
}: Props): JSX.Element => {
  const theme = React.useMemo(
    () => createTheme(getTheme(themeMode)),
    [themeMode],
  );

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </StyledEngineProvider>
  );
};

export default StoryBookThemeProvider;
