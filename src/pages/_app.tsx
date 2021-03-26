import React from 'react';
import { AppProps } from 'next/app';

import { Provider } from 'react-redux';

import GlobalStyle from '../styles/global';
import store from '../store';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Component {...pageProps} />
    <GlobalStyle />
  </Provider>
);

export default MyApp;
