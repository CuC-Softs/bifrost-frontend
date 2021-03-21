import Head from 'next/head';
import { ArrowBack } from '@material-ui/icons';
import { Header } from '../styles/login';

import Logo from '../components/Logo';

const pages: React.FC = () => (
  <>
    <Head>
      <title>Login</title>
    </Head>
    <Header>
      <ArrowBack />
      <Logo />
    </Header>
  </>
);

export default pages;
