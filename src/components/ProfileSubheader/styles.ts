import styled from 'styled-components';
import { darken } from 'polished';

export const HeaderExtension = styled.div`
  display: flex;

  width: 100%;
  height: fit-content;

  background: #f8f8f8;

  padding: 1rem 1.2rem 1rem 1.8rem;

  align-items: center;
  justify-content: space-between;

  box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

    @media (orientation: landscape){
      justify-content: initial;
      display: inline-grid;
      grid-template-columns: 1fr 3fr 1fr;
    }

  span {
    @media (orientation: landscape){
      justify-self: flex-end;
      margin-right: 16%;
    }

    font-size: 1.4rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    color: #00625b;
    font-weight: bold;
  }

  button {
    @media (orientation: landscape){
      justify-self: flex-end;
    }
    background: none;

    svg {
      width: 2rem;
      height: 2rem;

      color: #00625b;
    }
  }

  .info2 {
      display: flex;
      flex-direction: row;
      justify-self: flex-start;
      margin-left: 6.1rem;


      @media (orientation: portrait) {
        display: none;
        width: 0;
        height: 0;
      }

      .infoTile {
        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;
         & + div {
           margin-left: 0.5rem;
         }

        span {
          margin-top: 0.2rem;

          line-height: 1rem;

          font-size: 1.668rem;
          font-weight: bold;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

          text-align: center;
          font-weight: normal;
          display: flex;
          align-items: center;
          text-align: center;

          color: #00423D;

          & + span {
            font-size: 1.251rem;
            font-weight: 400;
          }
        }
      }
`;
