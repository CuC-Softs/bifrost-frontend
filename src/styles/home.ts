import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (orientation: landscape) {
    > div:nth-child(3) {
      display: none;
    }
  }

  .HotTitle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48.2rem;
    height: 4.4rem;

    @media (orientation: portrait) {
      display: none;
    }

    background: #f3f3f3;
    box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
    border-radius: 2.5rem;

    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 3rem;
    line-height: 3.5rem;
    color: #00867d;
  }
`;

export const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 3.5rem 2rem 0 2rem;
  align-items: center;

  @media (orientation: landscape) {
    padding: 3.7rem 2rem 0 2rem;
  }

  .mobileThings {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (orientation: landscape) {
      display: none;
    }
  }

  #slogan {
    display: flex;
    width: 32.9rem;
    height: 3.9rem;
    left: 4.9rem;
    top: 21.5rem;
    margin-top: 4.8rem;

    @media (orientation: landscape) {
      margin-top: 0;
      margin-left: 9rem;
    }

    background: #e1eae9;
    box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
    border-radius: 2.5rem;

    justify-content: center;
    align-items: center;

    color: #00625b;
    font-size: 1.8rem;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 400;
    line-height: 2.8rem;
  }
`;

export const DesktopSearchBarAndPlus = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media (orientation: portrait) {
    display: none;
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

export const Hot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 9rem;

  ul {
    margin-top: 4.3rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (orientation: landscape) {
      flex-direction: row;
      overflow-x: scroll;
      padding-bottom: 0.7rem;

      &::-webkit-scrollbar {
        height: 1rem;
        margin-top: 1rem;
      }

      /* Track */
      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 0.5rem grey;
        border-radius: 1rem;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: #c7f3ef;
        border-radius: 1rem;
      }

      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        background: #00867d;
      }
    }

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      list-style: none;

      @media (orientation: landscape) {
        width: unset;
        justify-content: center;
      }

      & + li {
        margin-top: 5rem;

        @media (orientation: landscape) {
          margin-top: 0;
          margin-left: 4rem;
        }
      }

      .hotImage {
        display: flex;
        height: 20rem;
        width: 17rem;
        -webkit-border-radius: 2.5rem;
        -moz-border-radius: 2.5rem;
        border-radius: 2.5rem;
        background: url('/images/paisagem.png') no-repeat;
        /* box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25); */
        box-shadow: rgba(0, 0, 0, 0.25);
        background-size: cover;
        border: none;

        &:hover {
          cursor: pointer;
        }

        @media (orientation: landscape) {
          width: 21.941rem;
          height: 26.329rem;
        }

        div {
          background: linear-gradient(
            rgba(255, 255, 255, 0),
            rgba(0, 66, 61, 1)
          );
          width: 100%;
          height: 100%;
          display: flex;
          border-radius: 2.5rem;
          justify-content: center;
          align-items: flex-end;
          position: relative;

          label {
            font-family: Roboto, sans-serif;
            font-size: 2.3rem;
            color: #fff;
            width: 95%;
            margin-bottom: 0.2rem;
            text-align: center;
          }
        }
      }
      /* Isso é uma div */
      .hotImageDescription {
        background: rgba(235, 235, 235, 0.5);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        border-radius: 2.5rem;
        width: 16.5rem;
        height: 18rem;
        padding: 0.2rem 0 1rem 0;

        &:hover,
        & label {
          cursor: pointer;
        }

        @media (orientation: landscape) {
          width: 21.295rem;
          height: 23.36rem;
          margin-left: 4.3rem;
        }

        label {
          margin-top: 1.1rem;
          color: #00867d;
          font-family: Roboto, sans-serif;
          font-size: 2.3rem;
          max-width: 11.8rem;
          max-height: 15.2rem;
          text-align: center;

          @media (orientation: landscape) {
            max-width: 17rem;
            font-size: 2.96844rem;
            line-height: 3.5rem;
          }
        }
      }
    }
  }
`;

export const ButtonsList = styled.div`
  display: flex;
  margin-top: 4rem;
  overflow-x: scroll;
  max-width: 100%;
  padding: 0 8.6rem;

  @media (orientation: landscape) {
    margin-top: 0;
    margin-left: 1rem;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  button {
    flex-shrink: 0;
    /* width: 23.2rem; */
    height: 4.3rem;
    padding: 0 4.5rem;

    margin-bottom: 0.6rem;
    margin-top: 0.6rem;

    background: #8edad3;
    border-radius: 35rem;

    & + button {
      margin-left: 2.8rem;
    }

    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: normal;
    font-size: 2.5rem;
    line-height: 2.9rem;

    box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

    color: #ffffff;

    text-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  }
`;

export const Hot2 = styled.div`
  display: flex;
  flex-direction: column;
  background: #d1dfde;
  margin-top: 1.8rem;

  @media (orientation: landscape) {
    margin-top: 8.5rem;
  }

  span {
    margin-top: 1rem;
    margin-left: 4.4rem;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    row-gap: 4rem;
    margin: 3.1rem 0 4rem 0;
    justify-items: center;

    @media (orientation: landscape) {
      grid-template-columns: repeat(7, 1fr);
      grid-template-rows: auto auto;
      row-gap: 3.4rem;
      column-gap: 5.3rem;
      margin-top: 2rem;
      padding: 0;
      margin: 2.5rem 4.4rem 8.7rem 4.4rem;
    }

    li {
      list-style: none;
    }

    .hot2Image {
      display: flex;
      height: 17rem;
      width: 15rem;
      border-radius: 2.5rem;
      background: url('/images/paisagem.png') no-repeat;
      box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

      div {
        background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 66, 61, 1));
        width: 100%;
        height: 100%;
        display: flex;
        border-radius: 2.5rem;
        justify-content: center;
        align-items: flex-end;
        position: relative;

        label {
          font-family: Roboto, sans-serif;
          font-size: 2.3rem;
          color: #fff;
          width: 95%;
          margin-bottom: 0.2rem;
          text-align: center;
        }
      }
    }
  }
`;
