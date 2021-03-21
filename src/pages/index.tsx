/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import Head from 'next/head';
import { AccountCircle, Search } from '@material-ui/icons';
import Logo from '../../public/images/logo.svg';
import NotFilledStar from '../../public/images/not_filled_star.svg';
import FilledStar from '../../public/images/filled_star.svg';
// import Paisagem from '../../public/images/paisagem.png';
import {
  Header,
  Body,
  SearchBarDiv,
  SearchBarInput,
  Hot,
} from '../styles/home';

const Home: React.FC = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Header>
      <div id="logo">
        <Logo />
      </div>
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
      <Hot>
        <li>
          <div id="image">
            <div>
              <label>Malibu</label>
            </div>
          </div>
          <div id="description">
            <div>
              <NotFilledStar />
              <NotFilledStar />
              <NotFilledStar />
              <NotFilledStar />
              <NotFilledStar />
            </div>
            <label>Praia de Malibu, Turismo Exótico</label>
          </div>
        </li>
        <li>
          <div id="description">
            <div>
              <FilledStar />
              <FilledStar />
              <FilledStar />
              <FilledStar />
              <NotFilledStar />
            </div>
            <label>Ponto Turístico Principal de Maceió</label>
          </div>
          <div id="image">
            <div>
              <label>Porto Rico</label>
            </div>
          </div>
        </li>
        <li>
          <div id="image">
            <div>
              <label>Shopping Parque</label>
            </div>
          </div>
          <div id="description">
            <div>
              <FilledStar />
              <FilledStar />
              <FilledStar />
              <NotFilledStar />
              <NotFilledStar />
            </div>
            <label>Diversificado para diversão familiar</label>
          </div>
        </li>
      </Hot>
    </Body>
  </div>
);

export default Home;
