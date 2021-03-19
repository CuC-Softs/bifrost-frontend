import React from 'react';

import Head from 'next/head';
import { AccountCircle } from '@material-ui/icons';
import { Header, Body, Searchbar } from '../styles/home';

const Home: React.FC = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Header>
      <div id="logo" />
      <button type="submit">
        <AccountCircle color="action" />
      </button>
    </Header>
    <Body>
      <Searchbar />
    </Body>
  </div>
);

export default Home;
