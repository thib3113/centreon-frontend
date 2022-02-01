import React, { ReactElement } from 'react';

import {
  render as rtlRender,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';

import ThemeProvider from './ThemeProvider';

interface Props {
  children: React.ReactChild;
  userTheme: string;
}

const ThemeProviderWrapper = ({ children, userTheme }: Props): JSX.Element => {
  return <ThemeProvider userTheme={userTheme}>{children}</ThemeProvider>;
};

const render = (
  ui: React.ReactElement,
  options?: RenderOptions,
): RenderResult =>
  rtlRender(ui, {
    wrapper: ThemeProviderWrapper as (props) => ReactElement | null,
    ...options,
  });

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
