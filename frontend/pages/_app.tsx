import React, { useState, useEffect } from 'react';
import { AppContext } from 'context/AppContext';
import 'theme/fontawesome-pro/css/all.css';
import { GlobalStyles } from 'theme/globalStyles';
import type { AppProps } from 'next/app';
import AppProvider from 'context/AppContext';
import { ThemeProvider } from 'styled-components';
import { darkColor, lightColor } from 'theme/colors';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    const newTheme = localStorage.getItem('theme');
    setTheme(JSON.parse(newTheme || 'true'));
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  });

  return (
    <AppProvider>
      <ThemeProvider theme={theme ? darkColor : lightColor}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppProvider>
  );
}

export default MyApp;
