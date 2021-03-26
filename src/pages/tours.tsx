import Head from 'next/head';
import React from 'react';

import Header from '../components/ToursHeader';

import { Body } from '../styles/tours';

const pages: React.FC = () => {
  const testData = [
    {
      id: 1,
      title: 'Viagem para a casa da sua mãe',
      img: 'https://wallpaperaccess.com/full/2204414.jpg',
    },
    {
      id: 2,
      title: 'Comi o cu do Manuno',
      img: 'https://wallpaperaccess.com/full/2204414.jpg',
    },
  ];

  return (
    <>
      <Head>
        <title>Suas tours</title>
      </Head>
      <Header />
      <Body>
        {testData.map(({ id, img, text, title }, i) => {
          if (i % 2 === 0) {
            return (
              <li key={id} className="listType1">
                <img src={img} alt="post-img" />
                <div className="normal">
                  <span>{title}</span>
                </div>
              </li>
            );
          }
          if (i % 2 === 1) {
            return (
              <li key={id} className="listType2">
                <div className="normal">
                  <span>{title}</span>
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
