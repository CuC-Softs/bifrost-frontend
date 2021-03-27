import { ArrowBack, ArrowForward, Map } from '@material-ui/icons';
import Head from 'next/head';
import Router from 'next/router';
import React, { useEffect, useState } from 'react';

import { Body, Body2, Header, Image, Location } from '../../styles/createTrip';

const pages: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (currentPage === 1) {
      document.getElementById('page1').style.display = 'none';
    }
    if (currentPage === 0) {
      document.getElementById('page2').style.display = 'none';
    }
    if (currentPage !== 1) {
      document.getElementById('page1').style.display = 'flex';
    }
    if (currentPage !== 0) {
      document.getElementById('page2').style.display = 'flex';
    }
  }, [currentPage]);

  return (
    <>
      <Head>
        <title>Create trip</title>
      </Head>
      <Header>
        <ArrowBack
          onClick={() => (currentPage === 1 ? setCurrentPage(0) : Router.back)}
        />
      </Header>

      {/* Tela 1 */}

      <Body id="page1">
        <Image>
          <input type="button" value="ADICIONAR FOTO" />
        </Image>
        <span>Nos fale sobre seu local!</span>
        <input id="title" type="text" placeholder="Nome do local" />
        <input id="description" type="text" placeholder="Descrição do local" />
        <button
          type="button"
          onClick={e => {
            setCurrentPage(1);
          }}
        >
          <ArrowForward />
        </button>
      </Body>

      {/* Tela 2 */}

      <Body2 id="page2">
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
};

export default pages;
