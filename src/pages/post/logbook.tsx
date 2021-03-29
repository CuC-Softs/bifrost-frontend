import {
  ArrowBack,
  FilterNoneRounded,
  AccountCircle,
  TrendingUp,
  TrendingDown,
} from '@material-ui/icons';
import Head from 'next/head';
import Link from 'next/link';
import {
  Header,
  LocationDescription,
  TripImages,
  Info,
  Reviews,
  SendMessage,
  Container,
} from '../../styles/post';
import DesktopHeader from '../../components/Header';

const pages: React.FC = () => (
  <Container>
    <Head>
      <title>Post</title>
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
          src="../images/foto-principal.png"
          alt="foto principal"
        />
      </TripImages>
      <Info>
        <h1>Titulo muito legal</h1>
        <span>
          AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
          AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
          AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
          AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
          AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        </span>
        <div>
          <TrendingUp />
          <TrendingDown />
        </div>
      </Info>
    </div>
    <div id="LocationDescriptionAndMakeTripButtonAndReviews">
      <LocationDescription />
      <Info>
        <h1>Titulo muito legal</h1>
        <span>
          AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
          AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
          AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
          AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
          AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        </span>
        <div>
          <TrendingUp />
          <TrendingDown />
        </div>
      </Info>
      <Reviews>
        <div id="reviews">
          <div>
            Comentarios:
            <FilterNoneRounded />
          </div>
          <ul>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(k => (
              <li key={k}>
                <span className="userNameText">Toby Fox Original</span>
                <img
                  className="userImage"
                  src="../images/user-avatar.png"
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
