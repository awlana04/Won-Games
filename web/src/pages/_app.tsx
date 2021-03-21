import { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Won Games</title>
        <link rel="shortcut icon" href="" />
        <link rel="apple-touch-icon" href="" />

      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
