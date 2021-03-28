import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  input[type='button'] {
    width: 11.023rem;
    height: 3.8rem;

    background: #00867d;
    box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
    border-radius: 7.3rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 1.6rem;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    color: #c7f3ef;

    & + input {
      margin-left: 8rem;
    }
  }
`;
