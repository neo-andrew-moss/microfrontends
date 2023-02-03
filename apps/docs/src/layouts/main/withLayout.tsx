import { Paper } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import React, { ComponentType } from 'react';
import theme from '../../theme';

interface IWithLayout {
  Layout<T>(_: T): JSX.Element;
}

const withLayout =
  ({ Layout }: IWithLayout) =>
  <T extends Record<string, unknown>>(
      WrappedComponent: ComponentType<T>,
    ): React.FC<T> =>
    // eslint-disable-next-line react/display-name
      ({ ...props }) =>
        (
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Paper elevation={0}>
              <Layout>
                <WrappedComponent {...(props as T)} />
              </Layout>
            </Paper>
          </ThemeProvider>
        );

export default withLayout;
