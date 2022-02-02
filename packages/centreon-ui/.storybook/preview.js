import React from 'react';

import { addDecorator } from '@storybook/react';

import { useDarkMode } from 'storybook-dark-mode';

import { ThemeMode } from '@centreon/ui-context';

import { ThemeProvider } from '../src';


const withThemeProvider = (story) => (
  <ThemeProvider themeMode={useDarkMode() ? ThemeMode.dark : ThemeMode.light}>{story()}</ThemeProvider>
);

addDecorator(withThemeProvider);
