import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  position: sticky;
  top: 0;
  z-index: 2;
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
    padding: 0 2.5rem 0 1.5rem;
  }

  div {
    display: flex;
  }

  > button:last-child {
    width: 6rem;
    height: 6rem;
    display: flex;
    align-self: center;

    @media (orientation: landscape) {
      display: none;
    }

    img,
    svg {
      width: 100%;
      height: 100%;
      color: #4db6ac;
    }
  }
`;

interface InstagramButtonAndProfileAvatarProps {
  isLogged: boolean;
  hasAvatar: boolean;
}

export const InstagramButtonAndProfileAvatar = styled.div<InstagramButtonAndProfileAvatarProps>`
  display: flex;
  align-items: center;

  button:first-child {
    width: 3rem;
    height: 3rem;

    ${props =>
      !props.isLogged && // eslint-disable-line
      css`
        display: none;
      `}

    svg {
      width: 100%;
      height: 100%;
    }
  }

  button:nth-child(2) {
    width: 6rem;
    height: 6rem;
    display: flex;
    margin-left: 1.5rem;

    ${props =>
      !props.isLogged && // eslint-disable-line
      css`
        display: none;
      `}

    svg, img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }

    img {
      ${props =>
      !props.hasAvatar && // eslint-disable-line
        css`
          display: none;
        `}
    }

    svg {
      color: #4db6ac;

      ${props =>
      props.hasAvatar && // eslint-disable-line
        css`
          display: none;
        `}
    }
  }

  button:last-child {
    width: 6rem;
    height: 6rem;
    display: flex;
    align-self: center;

    ${props =>
      props.isLogged && // eslint-disable-line
      css`
        display: none;
      `}

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

  button + button {
    margin-left: 2rem;
  }

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
