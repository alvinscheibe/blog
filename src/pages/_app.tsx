import '../../assets/tailwind.scss';
import '../../assets/icons.scss';
import type { AppProps } from 'next/app';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BackToTop } from '../components/BackToTop';
import { Switcher } from '../components/Switcher';
import { ThemeProvider } from 'next-themes';
import { Provider } from 'urql';
import { client, ssrCache } from '../lib/urql';

function MyApp({ Component, pageProps }: AppProps) {
  if (pageProps.urqlState)
    ssrCache.restoreData(pageProps.urqlState);

  return (
    <Provider value={client}>
      <ThemeProvider attribute={'class'}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <BackToTop />
        <Switcher />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp
