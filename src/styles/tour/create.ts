import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  div:first-child {
    @media (orientation: portrait) {
      display: none;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-top: 4rem;

  button {
    > svg {
      width: 3rem;
      height: 3rem;

      color: #00867d;
    }
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 1.2rem;

  span:first-child {
    width: 29rem;
    height: 6.3rem;

    background: #c7f3ef;
    box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
    border-radius: 3.5rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 1.7rem;
    line-height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    color: #00867d;
  }

  span:nth-child(2) {
    display: flex;
    width: 19rem;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 1.9rem;
    line-height: 2.2rem;
    text-align: center;

    color: #00867d;
  }

  span:nth-child(3) {
    display: flex;
    width: 100%;
    height: 7.5rem;
    align-items: center;
    justify-content: center;
    margin-top: 3.5rem;

    background: #c7f3ef;
    box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 1.9rem;
    line-height: 2.2rem;
    display: flex;
    align-items: center;
    text-align: center;

    color: #00867d;
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 11.2rem;
  margin-bottom: 5rem;
  width: 100%;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 29rem;
    height: 6rem;

    background: #c7f3ef;
    box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
    border-radius: 3.5rem;

    & + button {
      margin-top: 4.2rem;
    }

    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 1.9rem;
    line-height: 2.2rem;
    text-align: center;

    color: #00867d;
  }

  div:nth-child(1) {
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    grid-template-rows: auto auto;
    row-gap: 1rem;
    margin-top: -9rem;
    align-items: center;
    place-items: center;

    span {
      font-family: Roboto;
      font-style: normal;
      font-weight: 300;
      font-size: 1.9rem;
      line-height: 2.2rem;
      display: flex;
      align-items: center;
      text-align: center;

      color: #00867d;
    }

    span:nth-child(1) {
      grid-column: 1 / span 3;
      grid-row: 1;
    }

    input {
      width: 11.8rem;
      height: 6.1rem;

      background: #c7f3ef;
      box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
      border-radius: 3.5rem;

      font-family: Roboto;
      font-style: normal;
      font-weight: 300;
      font-size: 1.6rem;
      line-height: 2.2rem;
      display: flex;
      align-items: center;
      text-align: center;

      color: #00867d;

      &::-webkit-calendar-picker-indicator {
        display: none;
      }
    }
  }

  div:nth-child(2) {
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    grid-template-rows: auto auto;
    row-gap: 1rem;
    margin-top: 3rem;
    align-items: center;
    place-items: center;

    span {
      grid-column: 1 / span 3;
      grid-row: 1;

      font-family: Roboto;
      font-style: normal;
      font-weight: 300;
      font-size: 1.9rem;
      line-height: 2.2rem;
      display: flex;
      align-items: center;
      text-align: center;

      color: #00867d;
    }

    input {
      position: absolute;
      visibility: collapse;
    }

    label {
      width: 11.8rem;
      height: 6.1rem;

      background: #c7f3ef;
      box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
      border-radius: 3.5rem;

      font-family: Roboto;
      font-style: normal;
      font-weight: 300;
      font-size: 1.6rem;
      line-height: 2.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

      color: #00867d;
    }

    input:first-child,
    label:first-child {
      grid-column: 1;
      grid-row: 2;
    }

    input:last-child,
    label:last-child {
      grid-column: 3;
      grid-row: 2;
    }

    input:checked + label {
      background: ${darken(0.1, '#c7f3ef')};
    }
  }

  div:nth-child(3) {
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    grid-template-rows: auto auto auto;
    row-gap: 1.5rem;
    margin-top: 3rem;
    align-items: center;
    place-items: center;

    span {
      grid-column: 1 / span 3;
      grid-row: 1;

      font-family: Roboto;
      font-style: normal;
      font-weight: 300;
      font-size: 1.9rem;
      line-height: 2.2rem;
      display: flex;
      align-items: center;
      text-align: center;

      color: #00867d;
    }

    input {
      position: absolute;
      visibility: collapse;
    }

    label {
      width: 11.8rem;
      height: 6.1rem;

      background: #c7f3ef;
      box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
      border-radius: 3.5rem;

      font-family: Roboto;
      font-style: normal;
      font-weight: 300;
      font-size: 1.6rem;
      line-height: 2.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

      color: #00867d;
    }

    input:first-child,
    label:first-child {
      grid-column: 1;
      grid-row: 2;
    }

    input:nth-child(3),
    label:nth-child(3) {
      grid-column: 3;
      grid-row: 2;
    }

    input:last-child,
    label:last-child {
      grid-column: 1 / span 3;
      grid-row: 3;

      width: 20rem;
    }

    input:checked + label {
      background: ${darken(0.1, '#c7f3ef')};
    }
  }
`;

export const SubmitDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6rem;
  margin-bottom: 5rem;

  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 1.9rem;
    line-height: 2.2rem;
    display: flex;
    align-items: center;
    text-align: center;

    color: #00867d;
  }

  button {
    svg {
      height: 3rem;
      width: 3rem;
      margin-top: 2rem;

      color: #c7f3ef;
    }
  }
`;
