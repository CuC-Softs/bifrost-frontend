import styled from 'styled-components';
import { darken } from 'polished';

export const Header = styled.div`
  display: flex;

  width: 100%;
  height: fit-content;

  background: #f8f8f8;

  padding: 1rem 1.2rem 1rem 1.8rem;

  align-items: center;
  justify-content: space-between;

  box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

  span {
    font-size: 1.4rem;
    justify-content: center;
    align-items: center;
    width: 18%;
    text-align: center;
    height: 46.34%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    color: #00625b;
    font-weight: bold;

    @media (orientation: landscape) {
      font-size: 4.4rem;
    }
  }

  button {
    width: 4.83%;
    height: 48.78%;
    background: none;
    height: fit-content;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  svg {
    width: 4.83%;
    height: 48.78%;

    color: #00625b;
  }
`;
