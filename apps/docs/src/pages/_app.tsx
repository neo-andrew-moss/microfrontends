import * as React from 'react';
import NextApp, { AppContext, AppInitialProps, AppProps } from 'next/app';
import Head from 'next/head';

const _App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
};

_App.getInitialProps = async (
  appContext: AppContext,
): Promise<AppInitialProps> => {
  const appProps = await NextApp.getInitialProps({
    ...appContext,
    ctx: { ...appContext.ctx },
  });

  return {
    ...appProps,
    pageProps: { ...appProps.pageProps },
  };
};

export default _App;
