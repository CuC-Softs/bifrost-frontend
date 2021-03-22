import styled from 'styled-components';

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

export const TripImages = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  img {
    width: 100%;
    height: 100vw;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  ul {
    display: flex;
    overflow-x: scroll;
    margin: 1.5rem 0 0 1.3rem;
    max-width: 100%;

    &::-webkit-scrollbar {
      display: none;
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
      }
    }
  }
`;

export const LocationDescription = styled.div`
  margin-top: 2.2.rem;

  #descriptionTitle {
    display: flex;
    width: 100%;
    height: 5.5rem;
    padding: 0 1.8rem;

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
  }

  #rating {
    display: flex;
  }
`;
