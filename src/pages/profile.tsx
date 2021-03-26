import Head from 'next/head';
import React, { useEffect } from 'react';

import Header from '../components/ProfileHeader';
import HeaderExtension from '../components/ProfileSubheader';

import { Body } from '../styles/profile';

const pages: React.FC = () => {
  const isSelf = false;

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
      <Header isSelf={isSelf} />
      <HeaderExtension isSelf={isSelf} />
      <Body>
        {!isSelf ? (
          <>
            <li className="listType1">
              <img
                src="https://wallpaperaccess.com/full/2204414.jpg"
                alt="list-item-img"
              />
              <div className="normal">
                <label>Descrição</label>
              </div>
            </li>
            <li className="listType2">
              <div className="normal">
                <label>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </label>
                <img
                  src="https://wallpaperaccess.com/full/2204414.jpg"
                  alt="list-item-img"
                />
              </div>
            </li>
          </>
        ) : (
          <>
            <li className="listType1">
              <img src="/images/plane.jpg" alt="see-logbooks" />
              <div className="topButtons">
                <label>Veja seus diários de bordo</label>
              </div>
            </li>
            <li className="listType2">
              <div className="topButtons">
                <label>Veja seus planejamentos de viagens</label>
              </div>
              <img src="/images/calendar.jpg" alt="see-tours" />
            </li>
            <li className="listType1">
              <img src="/images/editCalendar.jpg" alt="create-tour" />
              <div className="topButtons">
                <label>Crie um novo planejamento de viagem</label>
              </div>
            </li>
            <li className="listType2">
              <div className="normal">
                <label>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </label>
              </div>
              <img
                src="https://wallpaperaccess.com/full/2204414.jpg"
                alt="list-item-img"
              />
            </li>
            <li className="listType1">
              <img
                src="https://wallpaperaccess.com/full/2204414.jpg"
                alt="list-item-img"
              />
              <div className="normal">
                <label>Descrição</label>
              </div>
            </li>
          </>
        )}
      </Body>
    </>
  );
};

export default pages;
