import styled from 'styled-components';
import { darken } from 'polished';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 5rem;
  width: 100%;
  padding: 0 0 0 1.3rem;

  svg {
    width: 2rem;
    height: 2rem;
    color: #00867d;
  }
`;

export const Image = styled.div`
  display: flex;
  width: 41.4rem;
  height: 34.6rem;
  background: #4db6ac;
  box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  justify-content: center;
  align-items: center;

  div {
    width: 22rem;
    height: 2rem;

    background: #c7f3ef;
    box-shadow: 0rem 0.2rem 0.2rem rgba(0, 0, 0, 0.25);
    border-radius: 2rem;
    justify-content: center;
    align-items: center;
    transition: 0.2s;

    &:hover {
      background: ${darken(0.1, '#c7f3ef')};
    }

    label {
      font-family: Roboto;
      font-style: normal;
      font-weight: 300;
      font-size: 1.9rem;
      line-height: 2.2rem;
      display: flex;
      align-items: center;
      text-align: center;
      text-align: center;
      justify-content: center;

      color: #006c65;
    }
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;

  span {
    position: absolute;
    width: 26.4rem;
    height: 6.3rem;
    left: 7.4rem;
    top: 41.2rem;
    justify-content: center;
    align-items: center;
    border-radius: 3.5rem;

    background: #ffffff;
    box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 2rem;
    line-height: 2.3rem;
    display: flex;
    align-items: center;
    text-align: center;

    color: #006c65;
  }

  #title {
    position: absolute;
    width: 39.6rem;
    height: 4.7rem;
    left: 0.9rem;
    top: 49.1rem;

    background: #c7f3ef;
    box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
    border-radius: 3.5rem;
    padding-left: 2.4rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 1.9rem;
    line-height: 2.2rem;
    color: #006c65;

    &::placeholder {
      font-family: Roboto;
      font-style: normal;
      font-weight: 300;
      font-size: 1.9rem;
      line-height: 2.2rem;
      display: flex;

      color: #006c65;
    }
  }

  #description {
    position: absolute;
    width: 30.7rem;
    height: 20.5rem;
    left: 5.3rem;
    top: 57.5rem;

    background: #c7f3ef;
    box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
    border-radius: 3.5rem;
    padding: 1.8rem 12.6rem 16.5rem 2.8rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 1.9rem;
    line-height: 2.2rem;
    display: flex;
    color: #006c65;

    &::placeholder {
      font-family: Roboto;
      font-style: normal;
      font-weight: 300;
      font-size: 1.9rem;
      line-height: 2.2rem;

      color: #006c65;
    }
  }

  svg {
    background: #e9e9e9;
    mix-blend-mode: normal;
    position: absolute;
    left: 17.8rem;
    top: 79.5rem;

    width: 5.7rem;
    height: 5.7rem;

    color: #006c65;
    border-radius: 50%;
  }
`;

export const Body2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    width: 26.4rem;
    height: 6.3rem;

    background: #ffffff;
    box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
    border-radius: 3.5rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 2rem;
    line-height: 2.3rem;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-bottom: 4.8rem;

    color: #00625b;
  }

  //isso é uma div
  #address {
    width: 29rem;
    height: 4.7rem;
    justify-content: space-between;
    display: flex;
    margin-bottom: 4.8rem;

    input[type='text'] {
      width: 14rem;
      height: 4.7rem;

      background: #c7f3ef;
      box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
      border-radius: 3.5rem;

      font-family: Roboto;
      font-style: normal;
      font-weight: 300;
      font-size: 1.9rem;
      line-height: 2.2rem;
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;

      color: #00625b;

      &::placeholder {
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 1.9rem;
        line-height: 2.2rem;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;

        color: #00625b;
      }
    }
  }

  input {
    margin-bottom: 4.8rem;
    width: 30.7rem;
    height: 6.1rem;

    background: #c7f3ef;
    box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
    border-radius: 3.5rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 1.9rem;
    line-height: 2.2rem;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    color: #00625b;

    &::placeholder {
      font-family: Roboto;
      font-style: normal;
      font-weight: 300;
      font-size: 1.9rem;
      line-height: 2.2rem;
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;

      color: #00625b;
    }
  }

  label {
    width: 22.2rem;
    height: 2.2rem;
    margin-bottom: 4.8rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 1.9rem;
    line-height: 2.2rem;
    display: flex;
    align-items: center;
    text-align: center;

    color: #00625b;
  }

  svg {
    width: 5.7rem;
    height: 5.7rem;

    border-radius: 83.125rem;
    background: #e9e9e9;
    mix-blend-mode: normal;

    color: #00625b;
  }
`;

export const Location = styled.div`
  width: 30.6rem;
  height: 10.2rem;
  margin-bottom: 4.8rem;

  background: #c7f3ef;
  box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  border-radius: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.6rem 0 2.6rem;

  label {
    width: 19.6rem;
    height: 2.2rem;
    margin: 0;

    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 1.9rem;
    line-height: 2.2rem;
    display: flex;
    align-items: center;
    text-align: center;

    color: #00625b;
  }

  svg {
    color: #4db6ac;
    width: 6rem;
    height: 6rem;
    background: none;
  }
`;
