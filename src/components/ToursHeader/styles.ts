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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    color: #00625b;
    font-weight: bold;
  }

  button {
    background: none;
  }

  svg {
    width: 2rem;
    height: 2rem;

    color: #00625b;
  }
`;
