import Head from 'next/head';
import Link from 'next/link';

import { ArrowBack } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { Header, Main } from '../styles/login';

import Logo from '../components/Logo';
import GoogleIcon from '../../public/images/google-icon.svg';

const pages: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    if (currentCard === 0) {
      document.getElementById('previous').style.display = 'none';
    }
    if (currentCard === 4) {
      document.getElementById('next').style.display = 'none';
    }
    if (currentCard !== 0) {
      document.getElementById('previous').style.display = 'block';
    }
    if (currentCard !== 4) {
      document.getElementById('next').style.display = 'block';
    }
  }, [currentCard]);

  function remToPx(rem: number) {
    return (
      rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  }

  function sideScroll(element, direction, speed, distance, step) {
    const cStep = remToPx(step);
    const cDist = remToPx(distance);
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      if (direction === 'left') {
        // eslint-disable-next-line no-param-reassign
        element.scrollLeft -= cStep;
      } else {
        // eslint-disable-next-line no-param-reassign
        element.scrollLeft += cStep;
      }
      scrollAmount += cStep;
      if (scrollAmount >= cDist) {
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
          <span>filler</span>
        </div>
        <div id="carousel-controller">
          <button
            id="previous"
            type="button"
            onClick={e => {
              const container = document.getElementById('carousel');
              sideScroll(container, 'left', 10, 40.8, 1);
              setCurrentCard(currentCard - 1);
            }}
          >
            Anterior
          </button>
          <button
            id="next"
            type="button"
            onClick={e => {
              const container = document.getElementById('carousel');
              sideScroll(container, 'right', 10, 40.8, 1);
              setCurrentCard(currentCard + 1);
            }}
          >
            Próximo
          </button>
        </div>
      </Main>
    </>
  );
};

export default pages;
