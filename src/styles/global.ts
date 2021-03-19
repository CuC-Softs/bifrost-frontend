import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-size: 62.5%;
    text-decoration: none;
    border: none;

    /* @media (orientation: portrait) {
      @media (min-width: 280px) {
          font-size: 27%;
      }

      @media (min-width: 320px) {
          font-size: 31%;
      }

      @media (min-width: 360px) {
          font-size: 35%;
      }

      @media (min-width: 375px) {
          font-size: 36%;
      }

      @media (min-width: 411px) {
          font-size: 40%;
      }

      @media (min-width: 540px) {
          font-size: 52%;
      }

      @media (min-width: 768px) {
          font-size: 80%;
      }

      @media (min-width: 1024px) {
          font-size: 100%;
      }
    }

    @media (orientation: landscape) {
      @media (min-width: 568px) {
          font-size: 36%;
      }

      @media (min-width: 653px) {
          font-size: 34%;
      }

      @media (min-width: 667px) {
          font-size: 43%;
      }

      @media (min-width: 720px) {
          font-size: 47%;
      }

      @media (min-width: 812px) {
          font-size: 43%;
      }

      @media (min-width: 1024px) {
          font-size: 76%;
      }

      @media (min-width: 1366px) {
          font-size: 90%;
      } */
    /* } */
  }

  #__next {}
`;
