import Head from 'next/head';
import React, { useEffect } from 'react';

import { Body, Header, HeaderExtension } from '../styles/profile';

import ArrowBack from '../../public/images/arrow_back-white.svg';

const pages: React.FC = () => {
  useEffect(() => {
    // eslint-disable-next-line operator-linebreak
    document.getElementById('header').style.background =
      "url('https://wallpaperaccess.com/full/2204414.jpg') no-repeat";
  }, []);

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Header>
        <ArrowBack />
        <img
          src="https://f4.bcbits.com/img/a3638493734_10.jpg"
          alt="profile_pic"
        />
        <div id="info">
          <div id="username">
            <label>@leoladraodewaifu</label>
          </div>
          <div id="numbers">
            <div>
              <label>Diários de bordo: 12</label>
              <label>Seguidores: 2</label>
            </div>
          </div>
          <div id="follow">
            <button type="button">SEGUIR</button>
          </div>
        </div>
      </Header>
      <HeaderExtension>
        <label>Publicações de Leonardo Oliveira</label>
      </HeaderExtension>
      <Body>
        <li>
          <img
            src="https://wallpaperaccess.com/full/2204414.jpg"
            alt="list-item-img"
          />
          <div>
            <label>Descrição</label>
          </div>
        </li>
      </Body>
    </>
  );
};

export default pages;
