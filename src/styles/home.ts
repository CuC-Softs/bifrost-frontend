import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 12rem;
  background-color: #edf4f4;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  #logo {
    width: 12.5rem;
    height: 6.3rem;
    left: 2.1rem;
    top: 3rem;
    border-radius: 50%;

    background: #4db6ac;
  }

  button {
    width: 6rem;
    height: 6rem;
    display: flex;

    img,
    svg {
      width: 100%;
      height: 100%;
      color: #4db6ac;
    }
  }
`;
export const Body = styled.div`
  flex: 1;
  display: flex;
  padding: 3.5rem 2rem;
  justify-content: center;
`;

export const Searchbar = styled.input.attrs({ type: 'text' })`
  border-radius: 2.5rem;
  width: 34.5rem;
  height: 3.3rem;
  background: #c7f3ef;

  div {
    background: url();
  }
`;

export const Hot = styled.ul`
  li {
    display: flex;

    div {
      display: flex;
      height: 20rem;
      width: 17rem;
      border-radius: 2.5rem;
      background: url() no-repeat;
      justify-content: center;
      align-items: flex-end;

      label {
        font-family: Roboto;
        font-size: 2.3rem;
        color: #fff;
        width: 17rem;
        height: 3rem;
        text-align: center;
      }
    }
  }
`;
