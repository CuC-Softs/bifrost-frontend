import styled from 'styled-components';
import { darken } from 'polished';

export const AppBar = styled.div`
  display: flex;
  background: #f8f8f8;
  align-items: center;
  padding: 1rem;

  svg {
    color: #00867d;

    width: 3rem;
    height: 3rem;
  }
`;

export const Header = styled.div.attrs({ id: 'header' })`
  display: flex;
  width: 100%;
  height: 22.4rem;

  padding: 0.8rem;

  .headerInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;

    h1 {
      font-family: 'Roboto';
      font-size: 1.6rem;
      color: #f8f8f8;
    }

    .headerDate {
      span {
        font-family: 'Roboto';
        font-size: 1rem;
        color: #f8f8f8;

        display: flex;
        align-items: center;

        svg {
          margin: 0 1rem;
        }
      }
    }
  }
`;

export const SubHeader = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;

  padding: 0.8rem;

  background: #f8f8f8;

  span {
    font-family: 'Roboto';
    font-size: 1.2rem;
    text-align: justify;

    color: #00423d;

    width: 100%;
  }
`;

export const PresetLi = styled.li`
  display: flex;
  flex-direction: row;
  width: 40.133rem;
  height: 21.4rem;

  .buttons {
    width: 4.095rem;
    height: 20.062rem;
    border-radius: 3rem 0rem 0rem 3rem;
    background: #00867d;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

    .up {
      width: 2.457rem;
      height: 2.675rem;

      color: #ffffff;

      margin-bottom: 10rem;
    }
    .down {
      width: 2.457rem;
      height: 2.675rem;

      color: #ffffff;
    }
  }
  .component {
    width: 34.809rem;
    height: 20.062rem;

    background: #c7f3ef;
    box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
    border-radius: 0 3rem 3rem 0;
  }

  .remove {
    position: relative;
    width: 2.457rem;
    height: 2.675rem;
    right: 1.224rem;
    bottom: 1.3rem;

    color: #00625b;
  }

  .text {
    .component {
    }
  }
  .image {
    .component {
    }
  }
  .video {
    .component {
    }
  }
  .map {
    .component {
    }
  }
`;
