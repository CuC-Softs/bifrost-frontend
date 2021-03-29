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
          opacity: 0.7;
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
      max-height: 10rem;
      min-height: 20rem;

      background: #c7f3ef;
      box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
      border-radius: 0 3rem 3rem 0;

      overflow: hidden;

      .entryImage {
        width: 100%;
        height: 100%;
        /* background-size: cover; */
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

        transform: translateY(100%) translateY(-0.2rem);
        transition: transform 0.2s;

        .greenBar {
          height: 0.2rem;
          top: 0;
          left: 0;
          width: 100%;
          background: rgba(199, 243, 239, 0.4);

          .greenJuice {
            height: 100%;
            width: 0;
            background: #00867d;
          }
        }

        .videoButtons {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          padding-right: 0.8rem;
          padding-left: 0.4rem;

          #playPause {
            border: 0;
            outline: 0;

            svg {
              width: 1.4rem;
              height: 1.4rem;
              display: inline-block;
              color: #fff;
            }
          }

          .volumeSlider {
            display: flex;
            height: 100%;
            width: fit-content;

            .volumeButton {
              border: 0;
              outline: 0;

              svg {
                width: 1.4rem;
                height: 1.4rem;
                display: inline-block;
                color: #fff;
              }
            }

            .sliderPadding {
              display: flex
              height: 100%;
              width: 8rem;
              align-items: center;

              .volume {
                -webkit-appearance: none;
                width: 100%;
                height: 0.4rem;
                border-radius: 1rem;
                background: #fff;
                outline: none;
              }

              .volume::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                border-radius: 100%;
                width: 1.2rem;
                height: 1.2rem;
                background: #fff;
                cursor: pointer;
              }

              .volume::-moz-range-thumb {
                width: 2.5rem;
                height: 2.5rem;
                background: #fff;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }

  .video:hover {
    .videoControls {
      transform: translateY(0);
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

      .map {
        width: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
        background: #c5c5c5;
        padding: 0.8rem;
        justify-content: space-between;
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
        background: #c4c4c4;
        justify-content: space-between;
        border-radius: 36rem;

        input[type='button'] {
          width: 6.1rem;
          height: 2.6rem;

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

          transition: background 0.1s;

          & + input[type='button'] {
            border-radius: 0 36rem 36rem 0;
          }
        }

        .normalSel {
          background: #f8f8f8;
        }

        .activeSelector {
          background: #e6e6e6;
        }
      }
    }
  }
`;

export const SearchBarDiv = styled.div`
  display: flex;
  align-items: center;
  border-radius: 2.5rem;
  width: 80%;
  height: 1.6rem;
  background: #c7f3ef;
  justify-content: flex-end;
  box-shadow: 0rem 0.2rem 0.2rem rgba(0, 0, 0, 0.25);

  form {
    width: 100%;
    height: 100%;
  }

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
