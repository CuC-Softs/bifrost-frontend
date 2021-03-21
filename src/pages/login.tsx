import Head from 'next/head';
import { ArrowBack } from '@material-ui/icons';
import { Header, Main } from '../styles/login';

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
    <Main>
      <span id="connect">Sincronize-se com uma rede social</span>
      <div id="carousel">
        <span>
          Ao sincronizar com uma rede social, você terá acesso à:
          <br />
          <br />
          Seu próprio perfil no site, customizavel.
        </span>
        <span>
          Ao sincronizar com uma rede social, você terá acesso à:
          <br />
          <br />
          Compartilhamento de dados, como diários de bordo e as viagens que você
          fez.
        </span>
        <span>
          Ao sincronizar com uma rede social, você terá acesso à:
          <br />
          <br />
          Comentar em posts, seguir, e ver perfis privados de ouras pessoas.
        </span>
        <span>
          Ao sincronizar com uma rede social, você terá acesso à:
          <br />
          <br />
          Acesso total ao site, com direito de poder criar sua própria aba de
          viagens.
        </span>
        <button type="submit">
          <span>Sincronize com o Google</span>{' '}
        </button>
        <div style={{ minWidth: '36.2rem' }} />
      </div>
    </Main>
  </>
);

export default pages;
