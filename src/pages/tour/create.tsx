import Head from 'next/head';

import { ArrowBack, ArrowForward } from '@material-ui/icons';
import Router from 'next/router';
import { useState } from 'react';
import { Header, Main, Options, SubmitDiv } from '../../styles/tour/create';

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

  function buildContent() {
    if (pageIndex < 3) {
      return (
        <>
          <Main>
            {pagesDatas[pageIndex].mainTexts.map(text => (
              <span>{text}</span>
            ))}
          </Main>
          <Options>
            {pagesDatas[pageIndex].optionsTexts.map(text => (
              <button
                type="button"
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
    }

    return (
      <>
        <Main>
          <span className="lastQuestion">Ajustes finais</span>
          <span style={{ visibility: 'collapse' }} />
          <span className="lastQuestion">Preencha esses últimos detalhes!</span>
        </Main>
        <Options>
          <div>
            <span>Quantos dias você planeja ficar?</span>
            <input type="date" name="dateFrom" id="dateFrom" />
            <span>até</span>
            <input type="date" name="dateTo" id="dateTo" />
          </div>
          <div>
            <span>Você prefere um local...?</span>
            <input type="radio" name="P4-Q2-A1" id="P4-Q2-A1" />
            <label htmlFor="P4-Q2-A1">Popular</label>
            <input type="radio" name="P4-Q2-A2" id="P4-Q2-A2" />
            <label htmlFor="P4-Q2-A2">Econômica</label>
          </div>
          <div>
            <span>Para descanso, você prefere...</span>
            <input type="radio" name="P4-Q2-A1" id="P4-Q3-A1" />
            <label htmlFor="P4-Q3-A1">Hotel</label>
            <input type="radio" name="P4-Q2-A2" id="P4-Q3-A2" />
            <label htmlFor="P4-Q3-A2">Pousada</label>
            <input type="radio" name="P4-Q2-A3" id="P4-Q3-A3" />
            <label htmlFor="P4-Q3-A3">Já tenho um local</label>
          </div>
        </Options>
        <SubmitDiv>
          <span>Me mostre os resultados!</span>
          <ArrowForward />
        </SubmitDiv>
      </>
    );
  }

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
      {buildContent()}
    </>
  );
};

export default pages;
