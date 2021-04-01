import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (orientation: portrait) {
    display: flex;
    flex-direction: column;

    > div:nth-child(2) {
      display: none;
    }
  }

  @media (orientation: landscape) {
    > div:nth-child(2) {
      grid-column: 1 / span 2;

      margin-bottom: 0.4rem;
    }

    #LocationDescriptionAndMakeTripButtonAndReviews > div:nth-child(2) {
      display: none;
    }
  }

  #TripsImagesAndMakeTripButton {
    display: flex;
    flex-direction: column;

    @media (orientation: landscape) {
      align-items: center;
      width: 79.8rem;

      background: #f9f9f9;
      border-radius: 2.5rem;
    }

    @media (orientation: portrait) {
      > div:last-child {
        display: none;
      }
    }
  }

  #LocationDescriptionAndMakeTripButtonAndReviews {
    display: flex;
    flex-direction: column;

    @media (orientation: landscape) {
      min-width: 64.2rem;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 5rem;
  width: 100%;
  padding: 0 0 0 1.3rem;

  @media (orientation: landscape) {
    display: none;
  }

  svg {
    width: 2rem;
    height: 2rem;
    color: #00867d;
  }
`;

export const TripImages = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (orientation: landscape) {
    padding: 2.9rem 7.8rem 0 7.8rem;
  }

  img {
    width: 100%;
    height: 100vw;

    filter: drop-shadow(0rem 4rem 4rem rgba(0, 0, 0, 0.25));

    @media (orientation: landscape) {
      width: 63rem;
      height: 63rem;

      border-radius: 2.5rem;
    }
  }

  ul {
    display: flex;
    overflow-x: auto;
    margin: 1.5rem 0 0 1.3rem;
    max-width: 100%;

    &::-webkit-scrollbar {
      display: none;
    }

    @media (orientation: landscape) {
      place-content: center;
    }

    li {
      list-style: none;

      & + li {
        margin-left: 2rem;
      }

      img {
        width: 8rem;
        height: 8rem;

        filter: none;

        @media (orientation: landscape) {
          border-radius: 2.5rem;
        }
      }
    }
  }
`;

export const LocationDescription = styled.div`
  margin-top: 2.2.rem;

  @media (orientation: landscape) {
    display: grid;
    width: 100%;

    grid-template-columns: auto;
    grid-template-rows: auto auto auto auto;
  }

  #descriptionTitle {
    display: flex;
    width: 100%;
    height: 5.5rem;
    padding: 0 1.8rem;

    @media (orientation: landscape) {
      justify-content: center;
    }

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 2.8rem;
    align-items: center;
    line-height: 3.3rem;

    color: #00867d;
  }

  #descriptionText {
    display: flex;
    width: 100%;
    margin-top: 5.5rem;
    padding: 0 2.5rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 2.3rem;
    line-height: 2.7rem;
    align-items: center;

    color: #4db6ac;

    @media (orientation: landscape) {
      width: 48.8rem;
      height: 17.3rem;
      margin-top: 0;
      justify-self: center;

      background: #f8f8f8;
      box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
      border-radius: 2.5rem;

      font-size: 3.06458rem;
      line-height: 3.6rem;
    }
  }

  #rating {
    display: flex;
    width: 100%;
    margin-top: 5.5rem;
    padding-left: 2.6rem;

    @media (orientation: landscape) {
      grid-row: 2;
      justify-content: center;
    }

    > span {
      margin-left: 1.3rem;

      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 1.8rem;
      line-height: 2.1rem;
      display: flex;
      align-items: center;

      color: #00867d;
    }
  }

  #offer {
    margin-top: 1.6rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 2.5rem;
    line-height: 2.9rem;
    display: flex;
    width: 100%;
    padding-left: 2.6rem;
    align-items: center;

    @media (orientation: landscape) {
      margin-top: 2rem;
      padding-left: 0rem;
      justify-content: center;
    }

    color: #00867d;
  }
`;

export const Info = styled.div`
  display: flex;
  width: 100%;
  margin-top: 0.6rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (orientation: landscape) {
    margin-top: 0.5rem;
  }

  h1 {
    width: 100%;
    height: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 3rem;
    justify-content: center;
    text-align: center;
    margin-bottom: 1rem;

    color: #00867d;

    @media (orientation: portrait) {
      text-align: start;
      padding-left: 1rem;
      margin-bottom: 0.5rem;
      padding-bottom: 1rem;
      box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
    }
  }

  span {
    max-width: 90%;
    height: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 1.2rem;
    justify-content: center;
    text-align: center;
    padding-top: 1rem;

    color: #00867d;

    @media (orientation: landscape) {
      font-size: 2rem;
    }
  }

  div {
    display: flex;
    height: fit-content;

    svg {
      width: 3rem;
      height: 3rem;
      color: #00867d;

      @media (orientation: landscape) {
        width: 5rem;
        height: 5rem;
      }
    }
  }
`;

export const Reviews = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  width: 100%;

  #makeReview {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 2.4rem;
    line-height: 2.8rem;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;

    @media (orientation: landscape) {
      display: none;
    }

    color: #00867d;
  }

  #reviews {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    padding: 1.2rem 1.2rem 0 1.2rem;
    width: 100%;

    background: #f9f9f9;

    @media (orientation: landscape) {
      padding: 0;
    }

    div:first-of-type {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 2.4rem;
      line-height: 2.8rem;
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;

      @media (orientation: landscape) {
        width: 100%;
        height: 7.3rem;
        padding: 0 2rem 0 3rem;

        background: #f9f9f9;
        box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
        border-radius: 2.5rem;

        font-size: 3.58688rem;
        line-height: 4.2rem;
      }

      color: #00867d;

      svg {
        width: 2.8rem;
        height: 2.8rem;

        @media (orientation: landscape) {
          width: 4rem;
          height: 4rem;
        }
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      width: 100%;
      overflow-y: auto;
      max-height: 40rem;
      margin-top: 1.5rem;

      &::-webkit-scrollbar {
        width: 1.5rem;
        margin-top: 1rem;
      }

      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 0.5rem grey;
        border-radius: 1rem;
      }

      &::-webkit-scrollbar-thumb {
        background: #c7f3ef;
        border-radius: 1rem;
      }

      &::-webkit-scrollbar-thumb:hover {
        background: #00867d;
      }

      @media (orientation: landscape) {
        max-height: 52.5rem;
      }

      li {
        list-style: none;
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-template-rows: auto;
        row-gap: 1rem;
        margin-bottom: 2.5rem;

        .userNameText {
          grid-row: 1;
          grid-column: 1 / span 2;
          font-family: Roboto;
          font-style: normal;
          font-weight: 300;
          font-size: 1.9rem;
          line-height: 2.2rem;
          display: flex;
          align-items: center;

          @media (orientation: landscape) {
            font-size: 2.8253rem;
            line-height: 3.3rem;
            margin-left: 3rem;
          }

          color: #00867d;
        }

        .userImage {
          grid-row: 2;
          grid-column: 1;
          width: 6rem;
          height: 6rem;
          border-radius: 50%;

          @media (orientation: landscape) {
            width: 9rem;
            height: 9rem;
            margin-left: 3rem;
          }
        }

        .userMessageText {
          grid-row: 2;
          grid-column: 2;
          width: 29.2rem;
          height: 19.6rem;

          background: #c7f3ef;
          border-radius: 3.5rem;

          font-family: Roboto;
          font-style: normal;
          font-weight: 300;
          font-size: 1.9rem;
          line-height: 2.2rem;
          display: flex;
          padding: 2.2rem;
          align-items: center;
          text-align: center;

          @media (orientation: landscape) {
            width: 43.42rem;
            height: 29.145rem;
            padding: 3.1rem;

            border-radius: 5.20449rem;

            font-size: 2.8253rem;
            line-height: 3.3rem;
          }

          color: #00867d;
        }
      }
    }
  }
`;

export const SendMessage = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto;
  row-gap: 1rem;
  width: 100%;
  align-items: center;
  margin: 2.5rem 0;

  span {
    grid-row: 1;
    grid-area: 1 / span 2;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 1.9rem;
    line-height: 2.2rem;
    display: flex;
    align-items: center;
    text-align: center;

    @media (orientation: landscape) {
      font-size: 2.8253rem;
      line-height: 3.3rem;
    }

    color: #00867d;
  }

  #userImage {
    grid-row: 2;
    grid-column: 1;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;

    @media (orientation: landscape) {
      width: 9rem;
      height: 9rem;
    }
  }

  #messageInput {
    grid-row: 2;
    grid-column: 2;
    width: 29.2rem;
    height: 5.1rem;
    padding: 0 2.5rem;

    background: #c7f3ef;
    border-radius: 3.5rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 1.9rem;
    line-height: 2.2rem;

    @media (orientation: landscape) {
      width: 43.42rem;
      height: 7.584rem;
      padding: 3.1rem;

      border-radius: 5.20449rem;

      font-size: 2.8253rem;
      line-height: 3.3rem;
    }

    color: #00867d;
  }
`;
