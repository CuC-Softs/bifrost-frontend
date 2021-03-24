import {
  ArrowBack,
  FilterNoneRounded,
  AccountCircle,
} from '@material-ui/icons';
import Head from 'next/head';
import { useEffect } from 'react';
import {
  Header,
  LocationDescription,
  TripImages,
  MakeTripButton,
  Reviews,
  SendMessage,
} from '../styles/trip';
import Stars from '../components/Stars';

const pages: React.FC = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log(document.getElementById('size').getAttribute('height'));
      // console.log((window.pageYOffset * 100) / window.innerHeight);
    });
  }, []);

  useEffect(
    () => window.removeEventListener('scroll', () => {}),

    [],
  );

  return (
    <>
      <div id="size">
        <Head>
          <title>Trip</title>
        </Head>
        <Header>
          <ArrowBack />
        </Header>
        <TripImages>
          <img src="images/foto-principal.png" alt="foto principal" />
          <ul>
            <li>
              <img src="images/foto-principal.png" alt="foto principal" />
            </li>
            <li>
              <img src="images/foto-principal.png" alt="foto principal" />
            </li>
            <li>
              <img src="images/foto-principal.png" alt="foto principal" />
            </li>
            <li>
              <img src="images/foto-principal.png" alt="foto principal" />
            </li>
            <li>
              <img src="images/foto-principal.png" alt="foto principal" />
            </li>
            <li>
              <img src="images/foto-principal.png" alt="foto principal" />
            </li>
            <div style={{ minWidth: '2rem' }} />
          </ul>
        </TripImages>
        <LocationDescription>
          <span id="descriptionTitle">Praia de Malibu</span>
          <span id="descriptionText">
            “Turismo Exótico, praias maravilhosas e culinária local, ao redor do
            estado, tremendas opções para se residiar.”
          </span>
          <div id="rating">
            <Stars rate={2} />
            <span>2 estrelas (23 reviews)</span>
          </div>
          <span id="offer">Economize a partir de R$126,87</span>
        </LocationDescription>
        <MakeTripButton>
          <button type="submit">
            <span>
              PLANEJE SUA VIAGEM
              <br />A PARTIR DESSE DESTINO
            </span>
          </button>
        </MakeTripButton>
      </div>
      <Reviews>
        <span id="makeReview">Fazer review</span>
        <div id="reviews">
          <div>
            Reviews:
            <FilterNoneRounded />
          </div>
          <ul>
            <li>
              <div className="userAvatar">
                <img src="" alt="userAvatar" />
              </div>
            </li>
          </ul>
        </div>
        <SendMessage>
          <AccountCircle />
          <input type="text" id="messageInput" />
        </SendMessage>
      </Reviews>
    </>
  );
};

export default pages;
