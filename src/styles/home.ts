import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 12rem;
  background-color: #edf4f4;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  #logo {
    width: 18.6rem;
    height: 9rem;
    background: #4db6ac;
    border: none;
    /* Me explica dps como usa imagens nesse framework, que n lembro */
    background-image: url('../public/images/profile.svg');
    background-repeat: no-repeat;
    margin: 0;
    padding: 0;
  }

  button {
    width: 6rem;
    height: 6rem;
    display: flex;
    align-self: center;

    img,
    svg {
      width: 100%;
      height: 100%;
      color: #4db6ac;
    }
  }
`;
export const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 3.5rem 2rem;
  align-items: center;

  #slogan {
    display: flex;
    width: 32.9rem;
    height: 3.9rem;
    left: 4.9rem;
    top: 21.5rem;
    margin-top: 4.8rem;

    background: #e1eae9;
    box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
    border-radius: 25px;

    justify-content: center;
    align-items: center;

    color: #00625b;
    font-size: 1.8rem;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 400;
    line-height: 2.8rem;
  }
`;

export const SearchBarDiv = styled.div`
  display: flex;
  align-items: center;
  border-radius: 2.5rem;
  width: 34.5rem;
  height: 3.3rem;
  background: #c7f3ef;
  padding: 0 1.7rem;

  svg {
    width: 1.8rem;
    height: 1.8rem;
    color: #00867d;
  }
`;

export const SearchBarInput = styled.input.attrs({ type: 'text' })`
  border-radius: 2.5rem;
  width: 100%;
  height: 100%;
  background: #c7f3ef;
  padding: 0 1rem;
  font-size: 1.8rem;
`;

export const Hot = styled.ul`
  li {
    display: flex;

    div {
      display: flex;
      height: 20rem;
      width: 17rem;
      border-radius: 2.5rem;
      background: url() no-repeat;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      div {
        background: linear-gradient(rgba(0, 66, 61, 1), rgba(255, 255, 255, 0));
        width: 100%;
        height: 100%;
        display: flex;
        border-radius: 2.5rem;
        justify-content: center;
        align-items: flex-end;

        label {
          font-family: Roboto, sans-serif;
          font-size: 2.3rem;
          color: #fff;
          width: 17rem;
          height: 3rem;
          text-align: center;
          text-justify: center;
        }
      }
    }
    /* Isso é uma div */
    #description {
      background: rgba(235, 235, 235, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      img,
      svg {
        width: 12.5rem;
        height: 2.9rem;
        justify-self: flex-start;
        align-self: center;
      }

      label {
        color: #00867d;
        font-family: Roboto, sans-serif;
        font-size: 2.3rem;
        max-width: 11.8rem;
        max-height: 15.2rem;
        text-align: center;
        text-justify: center;
      }
    }
  }
`;
