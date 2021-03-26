import Head from 'next/head';
import React, { useEffect } from 'react';

import Header from '../components/ProfileHeader';
import HeaderExtension from '../components/ProfileSubheader';

import { Body } from '../styles/profile';

const pages: React.FC = () => {
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
      <Header isSelf />
      <HeaderExtension isSelf />
    </>
  );
};

export default pages;
