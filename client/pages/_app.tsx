import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '../theme/fonts/fonts.css';
import theme from '../theme';
import { ThemeProvider } from '@gedesurya125/surya-ui';
import client from 'apollo-client';
import { ApolloProvider } from '@apollo/client';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
