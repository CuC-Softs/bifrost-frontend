/* eslint-disable jsx-a11y/alt-text */
import { ArrowBack, ArrowForward, Map } from '@material-ui/icons';
import Head from 'next/head';
import React from 'react';

import { Body, Body2, Header, Image, Location } from '../styles/createTrip';

const pages: React.FC = () => (
  <>
    <Head>
      <title>Create trip</title>
    </Head>
    <Header>
      <ArrowBack />
    </Header>
    {/* Tela 1
    <Image>
      <div>
        <label>ADICIONAR FOTO</label>
      </div>
    </Image>
    <Body>
      <span>Nos fale sobre seu local!</span>
      <input id="title" type="text" placeholder="Nome do local" />
      <input id="description" type="text" placeholder="Descrição do local" />
      <ArrowForward />
    </Body>
    */}
    <Body2>
      <span>Outras informações...</span>
      <div id="address">
        <input type="text" placeholder="Estado" />
        <input type="text" placeholder="Cidade" />
      </div>
      <input type="text" placeholder="Defina o preço por semana" />
      <input type="text" placeholder="Opções de pagamento" />
      <Location>
        <label>Defina o trajeto ao local</label>
        <Map />
      </Location>
      <input type="button" value="Termos de Condições" />
      <label>Enviar para a confirmação</label>
      <ArrowForward />
    </Body2>
  </>
);

export default pages;
