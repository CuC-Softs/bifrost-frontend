import { ArrowBack } from '@material-ui/icons';
import Head from 'next/head';
import { Header, LocationDescription, TripImages } from '../styles/trip';

const pages: React.FC = () => (
  <>
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
    </LocationDescription>
  </>
);

export default pages;
