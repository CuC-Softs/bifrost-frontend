import styled from 'styled-components';
import { darken } from 'polished';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 41.4rem;
  height: 17.9rem;
  margin: 0.5rem 0 2.3rem 0.5rem;
  justify-content: space-between;

  > svg {
    width: 5.2rem;
    height: 5.7rem;
    margin: 0.5rem 0 0 0.5rem;
    color: #00867d;
    transition: 0.2s;

    &:hover {
      color: ${darken(0.1, '#00867D')};
    }
  }
  label {
    width: 15rem;
    height: 4rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 2.5rem;
    line-height: 3rem;
    display: flex;
    align-items: center;
    margin-left: 1.3rem;

    color: #00867d;
  }

  /* isso é uma label */
  #Day {
    color: #00867d;
    font-family: Roboto, sans-serif;
    font-size: 3.6rem;
    transition: 0.2s;

    &:hover {
      color: ${darken(0.1, '#00867D')};
    }
  }
  /* isso é uma label */
  #DayTitle {
    font-size: 2.4rem;
    color: #4db6ac;
  }
`;

export const TripCards = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    display: flex;
    width: 38.1rem;
    height: 10rem;
    justify-content: center;
    align-self: center;

    div {
      width: 25.rem;
      height: 10.rem;

      background: #e8e8e8;
      box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
      border-radius: 10rem;
      display: flex;
      align-items: center;
      justify-content: center;

      label {
        width: 22.5rem;
        height: 6.7rem;

        font-family: Roboto, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 2rem;
        line-height: 2.3rem;
        display: flex;
        align-items: center;
        justify-content: center;

        color: #00423d;
      }
    }

    img {
      width: 10rem;
      height: 10rem;

      background: #c5c5c5;
      border-radius: 1rem;
      margin-right: 3rem;
    }
  }
`;
