import { PlayArrow } from '@material-ui/icons';
import styled from 'styled-components';

export const PresetLi = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;

  button:hover {
    cursor: pointer;
  }

  button {
    background: none;
  }

  & + li {
    margin-top: 2.2rem;
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

    padding: 1.5rem 1rem;

    justify-content: space-between;

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
  .component {
    width: 100%;
    height: fit-content;

    background: #c7f3ef;
    box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
    border-radius: 0 3rem 3rem 0;
  }

  .removeButton {
    position: relative;
    width: 2.4rem;
    height: 2.4rem;
    right: 1.2rem;
    bottom: 1.2rem;

    .remove {
      width: 100%;
      height: 100%;

      color: #00625b;
    }
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
        overflow: hidden;
        resize: none;
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
    width: 100%;
    display: flex;

    .component {
      display: flex;
      width: 100%;
      height: fit-content;
      min-height: 10rem;

      background: #c7f3ef;
      box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
      border-radius: 0 3rem 3rem 0;

      overflow: hidden;

      .entryImage {
        display: flex;
        width: 100%;
        height: 100%;
      }

      .imgLocation {
        position: absolute;

        padding: 0.8rem;

        button {
          font-size: 1.2rem;
          color: #f8f8f8;
        }
      }
    }
  }

  .video {
    width: 100%;
    display: flex;

    .component {
      display: flex;
      width: 100%;
      height: fit-content;
      min-height: 10rem;

      position: relative;

      background: #c7f3ef;
      box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
      border-radius: 0 3rem 0 0;

      overflow: hidden;

      .entryVideo {
        display: flex;
        width: 100%;
        height: 100%;

        object-fit: cover;
      }

      .videoLocation {
        position: absolute;

        padding: 0.8rem;

        button {
          font-size: 1.2rem;
          color: #f8f8f8;
        }
      }

      .videoControls {
        display: flex;
        position: absolute;
        bottom: 0;
        width: 100%;
        flex-wrap: wrap;
        background: rgba(0, 0, 0, 0.7);

        .videoButtons {
          #playPause {
            border: 0;
            outline: 0;

            /* svg {
              width: 1.4rem;
              height: 1.4rem;
              display: inline-block;
              color: #fff;
              -webkit-font-smoothing: antialiased;
            } */
          }

          #playPause {
            content: PlayArrow;
          }
        }
      }
    }
  }

  .location {
    width: 100%;
    display: flex;

    .component {
      display: flex;
      width: 100%;
      height: fit-content;
      min-height: 10rem;

      background: #c7f3ef;
      box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
      border-radius: 0 3rem 3rem 0;

      padding: 0;

      overflow: hidden;

      #map {
        width: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: #c5c5c5;
        padding: 0.8rem;
      }

      .nextImage {
        width: 2.4rem;
        height: 2.4rem;
        background: none;
        align-self: flex-end;

        svg {
          width: 2.4rem;
          height: 2.4rem;

          color: #ffffff;
        }
      }

      .selectors {
        width: 12.3rem;
        height: 2.6rem;
        display: flex;
        background: #ededed;
        justify-content: space-between;
        border-radius: 36rem;

        input[type='button'] {
          width: 6.1rem;
          height: 2.6rem;

          background: #ffffff;

          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 1rem;
          line-height: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;

          color: #888888;

          border-radius: 36rem 0 0 36rem;

          & + input[type='button'] {
            border-radius: 0 36rem 36rem 0;
          }
        }
      }
    }
  }
`;

export const SearchBarDiv = styled.div`
  display: flex;
  align-items: center;
  border-radius: 2.5rem;
  width: 25rem;
  height: 1.6rem;
  background: #c7f3ef;
  justify-content: flex-end;

  svg {
    width: 1.6rem;
    height: 1.6rem;
    color: #00625b;
    padding-right: 0.5rem;
  }
`;

export const SearchBarInput = styled.input.attrs({ type: 'text' })`
  border-radius: 2.5rem 0 0 2.5rem;
  width: 100%;
  height: 100%;
  background: #c7f3ef;
  padding: 0 0.5rem 0 1rem;
  font-size: 1rem;
  color: #00625b;
  align-items: center;
`;
