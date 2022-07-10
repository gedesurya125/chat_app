import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '../theme/fonts/fonts.css';
import theme from '../theme';
import { ThemeProvider } from '@gedesurya125/surya-ui';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
