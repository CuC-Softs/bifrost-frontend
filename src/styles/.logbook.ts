import styled from 'styled-components';
import { darken } from 'polished';

export const Header = styled.div`
  width: 41.4rem;
  height: 26.9rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    flex: 1;
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 66, 61, 0.6));
  }

  h1 {
    font-family: Roboto, sans-serif;
    font-size: 2.3rem;
    margin: 0.8rem 0 0 0.8rem;
    font-weight: normal;
    color: #fff;
    text-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  }
  /* Isso é uma div */
  #information {
    /* Todos os elementos dentro são divs */
    display: flex;
    flex-direction: row;
    padding: 0 0.8rem 0.8rem 0.8rem;
    align-items: end;
    justify-content: space-between;

    #period {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      label {
        font-family: Roboto, sans-serif;
        font-size: 1.3rem;
        color: #fff;
        text-align: center;
      }

      > svg {
        color: #fff;
        width: 1.4rem;
        height: 1.4rem;
        margin: 0.5rem;
        transform: rotate(90deg);
      }
    }
    #image_position {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      justify-self: center;
      width: 5.5rem;
      height: 1rem;

      /* divs tbm */
      #position {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background: #c4c4c4;
      }
      #positionSelected {
        width: 2.5rem;
        height: 1rem;
        border-radius: 50%;
        background: #c4c4c4;
      }
    }
    #avaliation {
    }
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;

  > svg {
    width: 5.2rem;
    height: 5.7rem;
    margin: 0.6rem 0 3.2rem 1.7rem;
    color: #00867d;
    transition: 0.2s;

    &:hover {
      color: ${darken(0.1, '#00867D')};
    }
  }

  ul {
    flex: 1;
  }

  li {
    padding-bottom: 3.8;
    padding-left: 2rem;
    max-width: 39rem;
    display: flex;
    flex-direction: column;

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
  }

  #TotalValue {
    color: #00867d;
    font-family: Roboto, sans-serif;
    font-size: 2.4rem;
    margin: 0 0 0.5rem 0.5rem;
    justify-self: flex-end;
    align-self: flex-start;
    position: fixed;
    top: 86.3rem;
  }
`;
