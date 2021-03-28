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

    @media (orientation: portrait) {
      @media (min-width: 280px) {
          font-size: 42%;
      }

      @media (min-width: 320px) {
          font-size: 47%;
      }

      @media (min-width: 360px) {
          font-size: 53%;
      }

      @media (min-width: 375px) {
          font-size: 55%;
      }

      @media (min-width: 411px) {
          font-size: 61%;
      }

      @media (min-width: 414px) {
          font-size: 62.5%;
      }

      @media (min-width: 540px) {
          font-size: 73%;
      }

      @media (min-width: 720px) {
          font-size: 107%;
      }

      @media (min-width: 768px) {
          font-size: 114%;
      }

      @media (min-width: 1024px) {
          font-size: 140%;
      }

      @media (min-width: 1080px) {
          font-size: 160%;
      }

      @media (min-width: 1440px) {
          font-size: 210%;
      }
    }

    @media (orientation: landscape) {
      @media (min-width: 800px) {
          font-size: 33%;
      }

      @media (min-width: 832px) {
          font-size: 35%;
      }

      @media (min-width: 1024px) {
          font-size: 44%;
      }

      @media (min-width: 1280px) {
          font-size: 54%;
      }

      @media (min-width: 1360px) {
          font-size: 58.5%;
      }

      @media (min-width: 1440px) {
          font-size: 62.5%;
      }

      @media (min-width: 2560px) {
          font-size: 110%;
      }
    }
  }

  button {
    background: none;

    &:hover {
      cursor: pointer;
    }
  }

  #__next {}
`;
