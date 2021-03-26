import Head from 'next/head';

import { ArrowBack } from '@material-ui/icons';
import Router from 'next/router';
import { useState } from 'react';
import { Header, Main, Options } from '../../styles/createlogbook';

const pages: React.FC = () => {
  const [pageIndex, setPageIndex] = useState(0);

  const pagesDatas = [
    {
      mainTexts: [
        'Planeje sua viagem dos sonhos!',
        'Vamos começar com algumas perguntas...',
        'Você gostaria de uma viagem fora do país?',
      ],
      optionsTexts: [
        'Sim, fora do país seria ótimo!',
        'Prefiro dentro do país',
      ],
    },
    {
      mainTexts: [
        'Planeje sua viagem dos sonhos!',
        'Próxima pergunta!',
        'Ótima resposta! Com acompanhantes?',
      ],
      optionsTexts: [
        'Não, irei sozinho(a)',
        'Sim, um acompanhante',
        'Sim, dois ou mais',
        'Família (2 parentes e filho(s))',
      ],
    },
    {
      mainTexts: [
        'Planeje sua viagem dos sonhos!',
        'Próxima pergunta!',
        'Como você preferiria sua viagem dos sonhos?',
      ],
      optionsTexts: [
        'Um local agradável e calmo',
        'Explorando o local dos sonhos',
        'Compras, lazer, parques',
        'Novas experiências, algo cultural',
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Create Logbook</title>
      </Head>
      <Header>
        <ArrowBack
          onClick={() => {
            if (pageIndex > 0) {
              setPageIndex(pageIndex - 1);
            } else {
              Router.back();
            }
          }}
        />
      </Header>
      <Main>
        {pagesDatas[pageIndex].mainTexts.map(text => (
          <span>{text}</span>
        ))}
      </Main>
      <Options>
        {pagesDatas[pageIndex].optionsTexts.map(text => (
          <button
            type="submit"
            onClick={() => {
              setPageIndex(pageIndex + 1);
            }}
          >
            {text}
          </button>
        ))}
      </Options>
    </>
  );
};

export default pages;
