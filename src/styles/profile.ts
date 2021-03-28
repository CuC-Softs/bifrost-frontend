import styled from 'styled-components';
import { darken } from 'polished';

export const Body = styled.ul`
  /* margin: 2.1rem 1.5rem 1.5rem 0; */
  display: flex;
  flex-direction: column;

  @media (orientation: landscape) {
    flex-direction: row;
    justify-content: center;

    .options {
      width: 26.67%;
      margin: 5.483rem;
    }

    .posts {
      width: 63.96%;
      height: 77vh;
      background: #f9f9f9;
      padding: 2.9rem 13.8rem 0 13.8rem;
      mix-blend-mode: darken;
    }

    .listType1 {
      img {
        width: 8.07%;
        height: 8.07%;
      }
    }
  }

  .listType1 {
    padding: 1rem;

    display: flex;
    align-items: center;
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

    .topButtons {
      display: flex;
      width: 100%;
      height: fit-content;

      padding: 1rem;

      margin-left: 1rem;

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
        line-height: 1.8rem;
        display: flex;
        align-items: center;
        text-align: center;

        color: #00625b;
      }
    }

    .normal {
      display: flex;
      width: 100%;
      min-height: 11.6rem;
      height: fit-content;

      padding: 1rem;

      margin-left: 1rem;

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
        line-height: 1.8rem;
        display: flex;
        align-items: center;
        text-align: center;

        color: #00625b;
      }
    }
  }

  .listType2 {
    padding: 1rem;

    display: flex;
    align-items: center;
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

    .topButtons {
      display: flex;
      width: 100%;
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
        line-height: 1.8rem;
        display: flex;
        align-items: center;
        text-align: center;

        color: #00625b;
      }
    }

    .normal {
      display: flex;
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
        line-height: 1.8rem;
        display: flex;
        align-items: center;
        text-align: center;

        color: #00625b;
      }
    }
  }
`;
