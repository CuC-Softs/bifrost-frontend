import styled from 'styled-components';
import { darken } from 'polished';

export const Header = styled.div.attrs({ id: 'header' })`
  display: flex;
  /* width: 100%;
  height: 19.1rem; */
  position: absolute;
  width: 41.4rem;
  height: 19.1rem;
  left: 0rem;
  top: 0rem;

  svg {
    position: absolute;
    width: 1.9rem;
    height: 2.22rem;
    left: 0.5rem;
    top: 0.252rem;
  }

  #info {
    display: flex;
    position: absolute;
    width: 35.5rem;
    height: 13.6rem;
    left: 2.9rem;
    top: 4.1rem;

    div {
      position: absolute;
      width: 10.6rem;
      height: 10.6rem;
      left: 2.9rem;
      top: 4.1rem;
    }
  }
`;

export const HeaderExtension = styled.div`
  width: 41.4rem;
  height: 3.9rem;

  background: #f8f8f8;
  box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

  label {
    position: absolute;
    width: 22.5rem;
    height: 3.8rem;
    left: 1.4rem;
    top: 19.1rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 1.8rem;
    display: flex;
    align-items: center;
    text-align: center;

    color: #00625b;
  }
`;

export const Body = styled.ul`
  margin: 2.1rem 1.5rem 1.5rem 0;
  display: flex;
  flex-direction: column;

  li {
    display: flex;
    justify-content: space-between;
    width: 38.4rem;
    height: 11.639rem;

    & + & {
      border-top: 1rem;
    }

    img {
      border-radius: 50% 50% 50% 10%;
    }

    div {
      width: 25.4rem;
      height: 11.6rem;

      background: #f6f6f6;
      box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
      border-radius: 3.5rem;
      align-items: center;
      justify-content: center;

      label {
        width: 24.1rem;
        height: 7.9rem;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 1.5rem;
        line-height: 1.8rem;
        display: flex;
        align-items: center;
        text-align: center;

        color: #00423d;
      }
    }
  }
`;
