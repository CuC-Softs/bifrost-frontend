import React, { useEffect } from 'react';
import {
  ArrowBack,
  KeyboardArrowUp,
  KeyboardArrowDown,
  ArrowForward,
  RemoveCircle,
} from '@material-ui/icons';
import Head from 'next/head';

import Link from 'next/link';
import { AppBar, Header, SubHeader, PresetLi } from '../styles/tour';

const pages: React.FC = () => {
  useEffect(() => {
    // eslint-disable-next-line operator-linebreak
    document.getElementById('header').style.background =
      "url('http://images3.memedroid.com/images/UPLOADED88/5f6a997801823.jpeg') no-repeat";
    document.getElementById('header').style.backgroundSize = 'cover';
  }, []);

  return (
    <>
      <Head>
        <title>Tour</title>
      </Head>
      <AppBar>
        <Link href="/">
          <ArrowBack />
        </Link>
      </AppBar>
      <Header>
        <div className="headerInfo">
          <h1>TÍTULO MUITO LEGAL</h1>
          <div className="headerDate">
            <span>
              27 de mar de 2021
              <ArrowForward />
              28 de mar de 2021
            </span>
          </div>
        </div>
      </Header>
      <SubHeader>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </span>
      </SubHeader>
      <PresetLi>
        <div className="text">
          <div className="buttons">
            <KeyboardArrowUp className="up" />
            <KeyboardArrowDown className="down" />
          </div>
          <div className="component" />
          <RemoveCircle className="remove" />
        </div>
      </PresetLi>
    </>
  );
};

export default pages;
