import styled from 'styled-components';

export const PresetLi = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;

  & + li {
    margin-top: 5rem;
  }

  .buttons {
    width: 4.2rem;
    height: 100%;
    border-radius: 3rem 0rem 0rem 3rem;
    background: #00867d;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

    justify-content: space-between;

    .upDownButton {
      background: none;

      .up {
        width: 3rem;
        height: 3rem;

        color: #ffffff;
      }
      .down {
        width: 3rem;
        height: 3rem;

        color: #ffffff;
      }
    }
  }
  .component {
    width: 100%;
    height: fit-content;

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
    width: 100%;
    display: flex;

    .component:hover {
      cursor: text;
    }

    .component {
      display: flex;
      width: 100%;
      height: fit-content;
      min-height: 10rem;

      padding: 0.8rem;

      background: #c7f3ef;
      box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
      border-radius: 0 3rem 3rem 0;

      #text {
        display: flex;
        width: 100%;
        height: 100%;
        overflow: auto;
        background: none;
        color: #00423d;
        font-family: 'Roboto';
        font-size: 1rem;

        ::placeholder {
          color: #00423d;
          font-family: 'Roboto';
          font-size: 1rem;
        }
      }
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
