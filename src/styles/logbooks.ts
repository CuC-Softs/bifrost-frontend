import styled from 'styled-components';
import { darken } from 'polished';

export const Title = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border: none;
  background: none;

  margin-bottom: 0.6rem;

  span {
    width: 100%;
    height: 100%;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    line-height: normal;
    display: flex;
    align-items: center;
    text-align: center;

    color: #00625b;

    @media (orientation: landscape) {
      font-size: 4rem;
    }
  }
`;

export const Body = styled.ul`
  /* margin: 2.1rem 1.5rem 1.5rem 0; */
  display: flex;
  width: 100%;
  flex-direction: column;

  .listType1 {
    padding: 1.12% 2.42%;

    display: flex;
    justify-content: space-between;
    width: 100%;
    height: fit-content;

    & + & {
      border-top: 1rem;
    }

    img {
      height: 11.6rem;
      width: 11.6rem;
      border-radius: 50% 50% 50% 10%;
      object-fit: cover;
      box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
    }

    .normal {
      display: flex;
      flex-direction: column;

      width: 100%;
      min-height: 11.6rem;
      height: fit-content;

      padding: 1rem;

      margin-left: 1rem;

      background: #f6f6f6;
      box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
      border-radius: 3.5rem;

      justify-content: center;

      label {
        width: 100%;
        height: 100%;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 1.5rem;
        line-height: normal;
        display: flex;
        align-items: center;
        text-align: center;

        color: #00625b;

        @media (orientation: landscape) {
          font-size: 3.5rem;
        }
      }
    }
  }

  .listType2 {
    padding: 1.12% 2.42%;

    display: flex;
    justify-content: space-between;
    width: 100%;
    height: fit-content;

    & + & {
      border-top: 1rem;
    }

    img {
      height: 11.6rem;
      width: 11.6rem;
      border-radius: 50% 50% 10% 50%;
      object-fit: cover;
      box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

      margin-left: 1rem;
    }

    .normal {
      display: flex;
      flex-direction: column;

      width: 100%;
      min-height: 11.6rem;
      height: fit-content;

      padding: 1rem;

      background: #f6f6f6;
      box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
      border-radius: 3.5rem;
      align-items: center;
      justify-content: center;

      label {
        width: 100%;
        height: 100%;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 1.5rem;
        line-height: normal;
        display: flex;
        align-items: center;
        text-align: center;

        color: #00625b;

        @media (orientation: landscape) {
          font-size: 3.5rem;
        }
      }
    }
  }
`;
