import Head from 'next/head';
import { AccountCircle, Search } from '@material-ui/icons';
import Link from 'next/link';
import NotFilledStar from '../../public/images/not_filled_star.svg';
import FilledStar from '../../public/images/filled_star.svg';
import {
  Header,
  Body,
  SearchBarDiv,
  SearchBarInput,
  Hot,
  ButtonsList,
  Hot2,
} from '../styles/home';
import Logo from '../components/Logo';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Header>
      <Logo />
      <Link href="/login">
        <button type="submit">
          <AccountCircle color="action" />
        </button>
      </Link>
    </Header>
    <Body>
      <SearchBarDiv>
        <Search />
        <SearchBarInput />
      </SearchBarDiv>
      <div id="slogan">FAÇA A VIAGEM DO SEUS SONHOS!</div>
      <Hot>
        <li>
          <div className="hotImage">
            <div>
              <label>Malibu</label>
            </div>
          </div>
          <div className="hotImageDescription">
            <div>
              <NotFilledStar />
              <NotFilledStar />
              <NotFilledStar />
              <NotFilledStar />
              <NotFilledStar />
            </div>
            <label>Praia de Malibu, Turismo Exótico</label>
          </div>
        </li>
        <li>
          <div className="hotImageDescription">
            <div>
              <FilledStar />
              <FilledStar />
              <FilledStar />
              <FilledStar />
              <NotFilledStar />
            </div>
            <label>Ponto Turístico Principal de Maceió</label>
          </div>
          <div className="hotImage">
            <div>
              <label>Porto Rico</label>
            </div>
          </div>
        </li>
        <li>
          <div className="hotImage">
            <div>
              <label>Shopping Parque</label>
            </div>
          </div>
          <div className="hotImageDescription">
            <div>
              <FilledStar />
              <FilledStar />
              <FilledStar />
              <NotFilledStar />
              <NotFilledStar />
            </div>
            <label>Diversificado para diversão familiar</label>
          </div>
        </li>
      </Hot>
    </Body>
    <ButtonsList>
      <button type="submit">Filtrar Opções</button>
      <button type="submit">Seus Logbooks</button>
      <div style={{ minWidth: '8.6rem' }} />
    </ButtonsList>
    <Hot2>
      <li>
        <div className="hot2Image">
          <div>
            <label>Hotel Paulista</label>
          </div>
        </div>
      </li>
      <li>
        <div className="hot2Image">
          <div>
            <label>Resort da Baleia</label>
          </div>
        </div>
      </li>
      <li>
        <div className="hot2Image">
          <div>
            <label>Praia do Bonito</label>
          </div>
        </div>
      </li>
      <li>
        <div className="hot2Image">
          <div>
            <label>Maceió Shopping</label>
          </div>
        </div>
      </li>
    </Hot2>
  </>
);

export default Home;
