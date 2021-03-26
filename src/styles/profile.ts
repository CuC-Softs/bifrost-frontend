import styled from 'styled-components';
import { darken } from 'polished';

export const Body = styled.ul`
  margin: 2.1rem 1.5rem 1.5rem 0;
  display: flex;
  flex-direction: column;

  li {
    display: flex;
    justify-content: space-between;
    width: 38.4rem;
    height: 11.639rem;

    & + & {
      border-top: 1rem;
    }

    img {
      border-radius: 50% 50% 50% 10%;
    }

    div {
      width: 25.4rem;
      height: 11.6rem;

      background: #f6f6f6;
      box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
      border-radius: 3.5rem;
      align-items: center;
      justify-content: center;

      label {
        width: 24.1rem;
        height: 7.9rem;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 1.5rem;
        line-height: 1.8rem;
        display: flex;
        align-items: center;
        text-align: center;

        color: #00423d;
      }
    }
  }
`;
