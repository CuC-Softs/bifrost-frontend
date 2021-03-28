import Head from 'next/head';
import { Search } from '@material-ui/icons';
import Link from 'next/link';
import {
  Body,
  SearchBarDiv,
  SearchBarInput,
  Hot,
  ButtonsList,
  Hot2,
  DesktopSearchBarAndPlus,
  Container,
} from '../styles/home';
import Stars from '../components/Stars';
import Header from '../components/Header';

const Home: React.FC = () => (
  <Container>
    <Head>
      <title>Home</title>
    </Head>
    <Header>
      <span>Planeje sua viagem</span>
    </Header>
    <Body>
      <div className="mobileThings">
        <SearchBarDiv>
          <Search />
          <SearchBarInput />
        </SearchBarDiv>
        <Link href="/logbook/create">
          <div id="slogan">FAÇA A VIAGEM DO SEUS SONHOS!</div>
        </Link>
      </div>

      <DesktopSearchBarAndPlus>
        <SearchBarDiv>
          <Search />
          <SearchBarInput />
        </SearchBarDiv>
        <Link href="/logbook/create">
          <div id="slogan">FAÇA A VIAGEM DO SEUS SONHOS!</div>
        </Link>
        <ButtonsList>
          <button type="submit">Filtrar Opções</button>
          <button type="submit">Seus Diários de Bordo</button>
          <div style={{ minWidth: '8.6rem' }} />
        </ButtonsList>
      </DesktopSearchBarAndPlus>

      <Hot>
        <span className="HotTitle">OS MAIS POPULARES DA SEMANA</span>
        <ul>
          <li>
            <div className="hotImage">
              <div>
                <label>Malibu</label>
              </div>
            </div>
            <div className="hotImageDescription">
              <Stars rate={4} />
              <label>Praia de Malibu, Turismo Exótico</label>
            </div>
          </li>
          <li>
            <div className="hotImage">
              <div>
                <label>Porto Rico</label>
              </div>
            </div>
            <div className="hotImageDescription">
              <Stars rate={4.6} />
              <label>Ponto Turístico Principal de Maceió</label>
            </div>
          </li>
          <li>
            <div className="hotImage">
              <div>
                <label>Shopping Parque</label>
              </div>
            </div>
            <div className="hotImageDescription">
              <Stars rate={3} />
              <label>Diversificado para diversão familiar</label>
            </div>
          </li>
        </ul>
      </Hot>
    </Body>
    <ButtonsList>
      <button type="submit">Filtrar Opções</button>
      <button type="submit">Seus Diários de Bordo</button>
      <div style={{ minWidth: '8.6rem' }} />
    </ButtonsList>
    <Hot2>
      <span className="HotTitle">OS MAIS RECÉM ADICIONADOS</span>
      <ul>
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
      </ul>
    </Hot2>
  </Container>
);

export default Home;
