import Head from 'next/head';
import Link from 'next/link';

import { ArrowBack } from '@material-ui/icons';
import { Header, Main } from '../styles/login';

import Logo from '../components/Logo';
import GoogleIcon from '../../public/images/google-icon.svg';

const pages: React.FC = () => {
  function remToPx(rem) {
    return (
      rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  }

  function sideScroll(element, direction, speed, distance, step) {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      if (direction === 'left') {
        // eslint-disable-next-line no-param-reassign
        element.scrollLeft -= step;
      } else {
        // eslint-disable-next-line no-param-reassign
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  }

  return (
    <>
      <Head>
        <title>Login</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js" />
      </Head>
      <Header>
        <Link href="/">
          <ArrowBack />
        </Link>
        <Logo />
      </Header>
      <Main>
        <span id="connect">Sincronize-se com uma rede social</span>
        <div id="carousel">
          <span>
            Ao sincronizar com uma rede social, você terá acesso a:
            <br />
            <br />
            Um perfil customizável só seu
          </span>
          <span>
            Compartilhamento de dados, como diários de bordo e as viagens que
            você criou
          </span>
          <span>Comentar em posts, seguir, e ver perfis de ouras pessoas.</span>
          <span>
            Acesso total ao site, com direito de criar sua própria aba de
            viagens.
          </span>
          <button type="submit">
            <span>
              <div>
                <GoogleIcon />
                Continuar com o Google
              </div>
            </span>
          </button>
          {/* <div style={{ display: 'flex', minWidth: '4.6rem', height: '1px' }} /> */}
        </div>
      </Main>
    </>
  );
};

export default pages;
