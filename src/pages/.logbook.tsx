import React from 'react';
import { ArrowBack } from '@material-ui/icons';
import Head from 'next/head';
import { Body, Header } from '../styles/.logbook';

const pages: React.FC = () => (
  <>
    <Head>
      <title>Logbook</title>
    </Head>
    <Header>
      <div>
        <h1>aaaaa</h1>
      </div>
    </Header>
    <Body>
      <ArrowBack />
      <ul>
        <li>
          <label id="Day">1 Dia</label>
          <label id="DayTitle">aaaaaa</label>
        </li>
      </ul>
      <label id="TotalValue">Gasto previsto: 666 reais</label>
    </Body>
  </>
);

export default pages;
