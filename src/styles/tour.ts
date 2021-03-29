import styled from 'styled-components';
import { darken } from 'polished';

export const AppBar = styled.div`
  display: flex;
  background: #f8f8f8;
  align-items: center;
  padding: 1rem;

  svg {
    color: #00867d;

    width: 3rem;
    height: 3rem;
  }
`;

export const Header = styled.div.attrs({ id: 'header' })`
  display: flex;
  width: 100%;
  height: 22.4rem;

  padding: 0.8rem;

  .headerInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;

    h1 {
      font-family: 'Roboto';
      font-size: 1.6rem;
      color: #00423d;
    }

    .headerDate {
      span {
        font-family: 'Roboto';
        font-size: 1rem;
        color: #00423d;

        display: flex;
        align-items: center;

        svg {
          margin: 0 1rem;
        }
      }
    }
  }
`;

export const SubHeader = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;

  padding: 0.8rem;

  background: #f8f8f8;

  span {
    font-family: 'Roboto';
    font-size: 1.2rem;
    text-align: justify;

    color: #00423d;

    width: 100%;
  }
`;

export const EntriesList = styled.ul.attrs({ id: 'entriesList' })`
  padding: 1rem;
`;

export const AddEntry = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: row;
  height: 3.7rem;
  width: 100vw;
  align-items: center;
  justify-content: center;

  .addEntryButton {
    width: 10.15rem;
    height: 100%;
    background: #c7f3ef;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.2rem;
    display: flex;
    align-items: center;
    text-align: center;
    margin: 0 0.1rem;
    justify-content: center;

    color: #00625b;
  }
`;

export const SaveDelete = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  input[type='button'] {
    width: 11.023rem;
    height: 3.8rem;

    background: #00867d;
    box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
    border-radius: 7.3rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 1.6rem;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    color: #c7f3ef;

    & + input {
      margin-left: 8rem;
    }
  }
`;
