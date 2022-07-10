import React, { useState, useEffect } from 'react';
import { GlobalStyles } from 'theme/globalStyles';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { darkColor, lightColor } from 'theme/colors';
import AppProvider from 'context/AppContext';
import 'theme/fontawesome-pro/css/all.css';
import { Header } from 'components/global';

function MyApp({ Component, pageProps }: AppProps) {
  const defaultTheme = true;
  const [theme, setTheme] = useState<boolean>(defaultTheme);

  useEffect(() => {
    const newTheme = localStorage.getItem('localTheme');
    setTheme(JSON.parse(newTheme || '{}'));
  }, []);

  useEffect(() => {
    localStorage.setItem('localTheme', JSON.stringify(theme));
  });

  return (
    <AppProvider>
      <ThemeProvider theme={theme ? darkColor : lightColor}>
        <GlobalStyles />
        <Header theme={theme} setTheme={setTheme} />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppProvider>
  );
}

export default MyApp;
