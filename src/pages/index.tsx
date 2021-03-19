import React from 'react';

import Head from 'next/head';
import { Add } from '@material-ui/icons';
import { Header } from '../styles/home';

const Home: React.FC = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Header>
      <Add />
    </Header>
  </div>
);

export default Home;
