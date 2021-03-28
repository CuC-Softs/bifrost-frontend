import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 12rem;
  background-color: #edf4f4;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;

  box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

  @media (orientation: landscape) {
    padding: 0;
  }

  button {
    width: 6rem;
    height: 6rem;
    display: flex;
    align-self: center;

    @media (orientation: landscape) {
      margin-right: 2.5rem;
    }

    img,
    svg {
      width: 100%;
      height: 100%;
      color: #4db6ac;
    }
  }
`;

export const SubHeader = styled.div`
  display: flex;
  width: 100%;
  height: 4.2rem;
  justify-content: center;
  align-items: center;
  margin-top: 0.4rem;

  @media (orientation: portrait) {
    display: none;
  }

  background: #ebeaea;
  box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

  span {
    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 1.9rem;
    text-align: center;

    color: #00625b;
  }
`;
