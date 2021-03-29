import {
  ArrowBack,
  FilterNoneRounded,
  AccountCircle,
} from '@material-ui/icons';
import Head from 'next/head';
import Link from 'next/link';
import {
  Header,
  LocationDescription,
  TripImages,
  MakeTripButton,
  Reviews,
  SendMessage,
  Container,
} from '../../styles/trip/index';
import Stars from '../../components/Stars';
import DesktopHeader from '../../components/Header';

const pages: React.FC = () => (
  <Container>
    <Head>
      <title>Trip</title>
    </Head>
    <Header>
      <Link href="/">
        <ArrowBack />
      </Link>
    </Header>
    <DesktopHeader>
      <span>Planeje sua viagem</span>
    </DesktopHeader>
    <div id="TripsImagesAndMakeTripButton">
      <TripImages>
        <img
          id="TripMainImage"
          src="images/foto-principal.png"
          alt="foto principal"
        />
        <ul>
          {[
            { url: 'images/foto-principal.png' },
            { url: 'images/paisagem.png' },
            { url: 'images/foto-principal.png' },
            { url: 'images/foto-principal.png' },
            { url: 'images/paisagem.png' },
          ].map((image, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index}>
              <button
                type="submit"
                onClick={() => {
                  document
                    .getElementById('TripMainImage')
                    .setAttribute('src', image.url);
                }}
              >
                <img src={image.url} alt="foto principal" />
              </button>
            </li>
          ))}
          <div style={{ minWidth: '2rem' }} />
        </ul>
      </TripImages>
      <MakeTripButton>
        <button type="submit">
          <span>
            PLANEJE SUA VIAGEM
            <br />A PARTIR DESSE DESTINO
          </span>
        </button>
      </MakeTripButton>
    </div>
    <div id="LocationDescriptionAndMakeTripButtonAndReviews">
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
      <Reviews>
        <span id="makeReview">Fazer review</span>
        <div id="reviews">
          <div>
            Avaliações:
            <FilterNoneRounded />
          </div>
          <ul>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(k => (
              <li key={k}>
                <span className="userNameText">Toby Fox Original</span>
                <img
                  className="userImage"
                  src="images/user-avatar.png"
                  alt="userAvatar"
                />
                <span className="userMessageText">
                  É TÃO BOM É TÃO BOM É TÃO BOM É TÃO BOM É TÃO BOM É TÃO BOM É
                  TÃO BOM É TÃO BOM É TÃO BOM É TÃO BOM É TÃO BOM É TÃO BOM É
                  TÃO BOM É TÃO BOM É TÃO BOM É TÃO BOM
                </span>
              </li>
            ))}
          </ul>
          <SendMessage>
            <span>GarotasMimadas12</span>
            <AccountCircle id="userImage" />
            <input type="text" id="messageInput" />
          </SendMessage>
        </div>
      </Reviews>
    </div>
  </Container>
);

export default pages;
