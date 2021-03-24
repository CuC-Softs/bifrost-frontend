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
    height: 24.2rem;
    align-items: center;
    margin-top: 4.4rem;
    padding-left: 5.3rem;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    background: #edf4f4;
    box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

    span {
      min-width: 31.6rem;

      & + span {
        margin-left: 4.6rem;
      }

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
      margin-left: 4.6rem;
      align-items: center;

      svg {
        width: 3rem;
        height: 3rem;

        margin-right: 1rem;
      }

      span {
        padding: 0.8rem;
        min-width: 31.6rem;
        min-height: 2rem;
        /* margin-top: 2rem; */

        background: #00625b;
        border-radius: 3.5rem;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        line-height: 1.5rem;

        color: #a2e0da;

        box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
        div {
          display: flex;

          align-items: center;
          justify-content: center;

          font-size: 1.6rem;
        }
      }
    }
  }
`;
