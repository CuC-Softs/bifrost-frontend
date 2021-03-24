import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-top: 4rem;

  > svg {
    width: 3rem;
    height: 3rem;
    margin-bottom: 6.9rem;

    color: #00867d;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 6.7rem;

  #connect {
    display: flex;
    width: 34.5rem;
    height: 3.3rem;

    background: #c7f3ef;
    border-radius: 36rem;

    align-items: center;
    justify-content: center;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 1.8rem;
    line-height: 2.1rem;

    color: #00867d;
  }

  #carousel {
    display: flex;
    max-width: 100%;
    height: 21rem;
    align-items: center;
    margin-top: 4.4rem;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      display: none;
    }

    background: #edf4f4;
    box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

    span {
      min-width: 31.6rem;
      margin: 0 4.8rem;

      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 1.9rem;
      line-height: 2.2rem;
      text-align: center;

      color: #4db6ac;
    }

    button {
      display: flex;
      flex-direction: column;
      /* min-width: 31.6rem; */
      margin-left: 4.8rem;
      margin-right: 4.8rem;
      align-items: center;

      span {
        padding: 0.8rem;
        min-width: 31.6rem;
        min-height: 2rem;
        margin: 0;

        background: #00625b;
        border-radius: 3.5rem;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        line-height: 1.5rem;

        color: #a2e0da;

        box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
        div {
          svg {
            width: 3rem;
            height: 3rem;

            margin-right: 1rem;
          }

          display: flex;

          align-items: center;
          justify-content: center;

          font-size: 1.6rem;
        }
      }
    }

    #carousel:last-child {
      margin: 0;
    }
  }

  #carousel-controller {
    display: flex;
    width: 34.5rem;
    height: 3.3rem;

    margin-top: 3.6rem;

    justify-content: center;

    button {
      display: flex;
      flex-direction: column;
      align-items: center;

      padding: 0.8rem;
      min-width: 14rem;
      min-height: 2rem;

      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 1.8rem;
      line-height: 2.1rem;

      background: #00625b;
      border-radius: 0.6rem;

      color: #a2e0da;

      box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

      & + button {
        margin-left: 0.8rem;
      }
    }
  }
`;
