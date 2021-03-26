import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-top: 4rem;

  > svg {
    width: 3rem;
    height: 3rem;

    color: #00867d;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 1.2rem;

  span:first-child {
    width: 29rem;
    height: 6.3rem;

    background: #c7f3ef;
    box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
    border-radius: 3.5rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    line-height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    color: #00867d;
  }

  span:nth-child(2) {
    display: flex;
    width: 19rem;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 1.9rem;
    line-height: 2.2rem;
    text-align: center;

    color: #00867d;
  }

  span:nth-child(3) {
    display: flex;
    width: 100%;
    height: 7.5rem;
    align-items: center;
    justify-content: center;
    margin-top: 3.5rem;

    background: #c7f3ef;
    box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 1.9rem;
    line-height: 2.2rem;
    display: flex;
    align-items: center;
    text-align: center;

    color: #00867d;
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 11.2rem;
  width: 100%;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 29rem;
    height: 6rem;

    background: #c7f3ef;
    box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
    border-radius: 3.5rem;

    & + button {
      margin-top: 4.2rem;
    }

    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 1.9rem;
    line-height: 2.2rem;
    text-align: center;

    color: #00867d;
  }
`;
