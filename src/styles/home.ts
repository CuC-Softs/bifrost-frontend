import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 12rem;
  background-color: #edf4f4;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  img {
    width: 0;
    height: 0;
  }

  button {
    width: 6rem;
    height: 6rem;
    display: flex;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
export const Body = styled.body`
  flex: 1;
  display: flex;
  padding: 3.5rem 2rem 2rem 0;
`;

export const Searchbar = styled.input.attrs({ type: 'submit' })`
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
