import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect } from 'react';

import Header from '../components/Header';
import Header2 from '../components/ProfileHeader';
import HeaderExtension from '../components/ProfileSubheader';

import { Body } from '../styles/profile';

const pages: React.FC = () => {
  const isSelf = true;

  const testData = [
    {
      id: 1,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      img: 'https://wallpaperaccess.com/full/2204414.jpg',
    },
    {
      id: 2,
      text: 'Descrição aqui.',
      img: 'https://wallpaperaccess.com/full/2204414.jpg',
    },
  ];

  useEffect(() => {
    // eslint-disable-next-line operator-linebreak
    document.getElementById('header').style.background =
      "url('https://images.hdqwalls.com/download/red-bull-rb12-f1-ii-3840x2160.jpg') no-repeat";
    document.getElementById('header').style.backgroundSize = 'cover';
  }, []);

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Header>
        <span>Planeje sua viagem</span>
        <span>Adicione seu próprio local</span>
      </Header>
      <Header2 isSelf={isSelf} />
      <HeaderExtension isSelf={isSelf} />
      <Body>
        {!isSelf ? (
          <>
            <ul className="posts">
              {testData.map(({ id, img, text }, i) => {
                if (i % 2 === 0) {
                  return (
                    <li key={id} className="listType1">
                      <img src={img} alt="post-img" />
                      <div className="normal">
                        <label>{text}</label>
                      </div>
                    </li>
                  );
                }
                if (i % 2 === 1) {
                  return (
                    <li key={id} className="listType2">
                      <div className="normal">
                        <label>{text}</label>
                      </div>
                      <img src={img} alt="post-img" />
                    </li>
                  );
                }
              })}
            </ul>
          </>
        ) : (
          <>
            <ul className="options">
              <Link href="/logbooks">
                <li className="listType1">
                  <img src="/images/plane.jpg" alt="see-logbooks" />
                  <div className="topButtons">
                    <label>Seus diários de bordo</label>
                  </div>
                </li>
              </Link>
              <Link href="/tours">
                <li className="listType2">
                  <div className="topButtons">
                    <label>Seus tours</label>
                  </div>
                  <img src="/images/calendar.jpg" alt="see-tours" />
                </li>
              </Link>
              <Link href="/logbook/create">
                <li className="listType1">
                  <img src="/images/editCalendar.jpg" alt="create-tour" />
                  <div className="topButtons">
                    <label>Novo tour</label>
                  </div>
                </li>
              </Link>
            </ul>
            <ul className="posts">
              {testData.map(({ id, img, text }, i) => {
                if (i % 2 === 1) {
                  return (
                    <li key={id} className="listType1">
                      <img src={img} alt="post-img" />
                      <div className="normal">
                        <label>{text}</label>
                      </div>
                    </li>
                  );
                }
                if (i % 2 === 0) {
                  return (
                    <li key={id} className="listType2">
                      <div className="normal">
                        <label>{text}</label>
                      </div>
                      <img src={img} alt="post-img" />
                    </li>
                  );
                }
              })}
            </ul>
          </>
        )}
      </Body>
    </>
  );
};

export default pages;
