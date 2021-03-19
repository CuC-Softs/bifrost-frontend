import React from 'react';

import Head from 'next/head';
import { AccountCircle, Search } from '@material-ui/icons';
import { Header, Body, SearchBarDiv, SearchBarInput } from '../styles/home';

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
      <SearchBarDiv>
        <Search />
        <SearchBarInput />
      </SearchBarDiv>
      <div id="slogan">FAÇA A VIAGEM DO SEUS SONHOS!</div>
    </Body>
  </div>
);

export default Home;
