import Head from 'next/head';
import React from 'react';

import Header from '../components/LogbooksHeader';

import { Body, Title } from '../styles/logbooks';

const pages: React.FC = () => {
  const testData = [
    {
      id: 1,
      title: 'Viagem para a casa da sua mãe',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      img: 'https://wallpaperaccess.com/full/2204414.jpg',
    },
    {
      id: 2,
      title: 'Comi o cu do Manuno',
      text: 'Descrição aqui.',
      img: 'https://wallpaperaccess.com/full/2204414.jpg',
    },
  ];

  return (
    <>
      <Head>
        <title>Seus diários de bordo</title>
      </Head>
      <Header />
      <Body>
        {testData.map(({ id, img, text, title }, i) => {
          if (i % 2 === 0) {
            return (
              <li key={id} className="listType1">
                <img src={img} alt="post-img" />
                <div className="normal">
                  <Title>
                    <span>{title}</span>
                  </Title>
                  <label>{text}</label>
                </div>
              </li>
            );
          }
          if (i % 2 === 1) {
            return (
              <li key={id} className="listType2">
                <div className="normal">
                  <Title>
                    <span>{title}</span>
                  </Title>
                  <label>{text}</label>
                </div>
                <img src={img} alt="post-img" />
              </li>
            );
          }
        })}
      </Body>
    </>
  );
};

export default pages;
