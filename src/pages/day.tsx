import Head from 'next/head';
import React from 'react';
import { ArrowBack } from '@material-ui/icons';
import { TripCards, Header } from '../styles/day';

const pages: React.FC = () => (
  <>
    <Head>
      <title>Dia</title>
    </Head>
    <Header>
      <ArrowBack />
      <label id="Day">1 Dia</label>
      <label id="DayTitle">aaaaaa</label>
      <label>Informações:</label>
    </Header>
    <TripCards>
      <li>
        <img
          alt=""
          src="https://pbs.twimg.com/profile_images/1293925081542995971/s2la3KS9_400x400.png"
        />
        <div>
          <label>TOPPPPER</label>
        </div>
      </li>
    </TripCards>
  </>
);

export default pages;
