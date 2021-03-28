import styled from 'styled-components';
import { darken } from 'polished';

export const Header1 = styled.div.attrs({ id: 'header' })`
  display: flex;
  /* width: 100%;
  height: 19.1rem; */
  /* position: absolute; */
  width: 100%;
  height: 19.1rem;

  .back {
    position: absolute;
    width: 3rem;
    height: 3rem;
    background: none;
    left: 0.5rem;
    top: 0.252rem;

    svg {
      /* position: absolute; */
      width: 100%;
      height: 100%;
      color: #fff;

      /* left: 0.5rem;
      top: 0.252rem; */
    }
  }

  .false {
    width: 100%;
    padding: 4.1rem 3rem 1.4rem;

    #userinfo {
      position: relative;
      display: flex;
      /* position: absolute; */
      width: 100%;
      height: 100%;
      /* left: 2.9rem;
    top: 4.1rem; */

      img {
        /* position: absolute; */
        width: 10.6rem;
        height: 10.6rem;
        /* left: 2.9rem;
      top: 4.1rem; */
        border-radius: 50%;
      }

      .info {
        position: absolute;
        display: flex;
        flex-direction: column;
        padding-top: 3rem;
        padding-left: 12rem;
        width: 100%;
        height: 100%;

        justify-content: center;
        align-items: center;

        justify-content: space-between;

        .span {
          /* display: flex; */
          /* width: 17.2rem; */
          /* height: 3rem; */
          width: fit-content;
          /* display: flex; */

          background: #f3f3f3;
          box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
          border-radius: 3rem;

          align-items: center;

          padding: 0.8rem;

          & + .span {
            margin-left: 1rem;
          }

          span {
            font-size: 1.2rem;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;

            color: #00423d;
            font-weight: bold;
          }
        }

        div {
          display: flex;
          flex-direction: horizontal;
          width: 100%;

          justify-content: center;
        }

        .follow {
          top: 0;
          bottom: 0;
          position: relative;

          width: 10rem;
          height: 3rem;

          background: #28b5f4;
          box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
          border-radius: 3rem;

          padding: 0.6rem;

          color: #fff;

          font-size: 1.2rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

          font-weight: bold;
        }
      }
    }
  }
`;

export const Header2 = styled.div.attrs({ id: 'header' })`
  display: flex;
  /* width: 100%;
  height: 19.1rem; */
  /* position: absolute; */
  width: 100%;
  height: 19.1rem;

  .back {
    position: absolute;
    width: 3rem;
    height: 3rem;
    background: none;
    left: 0.5rem;
    top: 0.252rem;

    svg {
      /* position: absolute; */
      width: 100%;
      height: 100%;

      /* left: 0.5rem;
      top: 0.252rem; */
    }
  }

  .true {
    display: flex;

    width: 100%;

    .info2 {
      display: flex;
      flex: 0.3;
      flex-direction: column;

      padding: 1.5rem 1.35rem 0.6rem;

      @media (orientation: landscape) {
        display: none;
        width: 0;
        height: 0;
      }

      .infoTile {
        display: flex;
        flex: 1;
        flex-direction: column;

        justify-content: center;
        align-items: center;

        & + .infoTile {
          border-top: 0.15rem solid rgba(240, 240, 240, 0.22);
        }

        span {
          margin-top: 0.2rem;

          line-height: 1rem;

          font-size: 1.4rem;
          font-weight: bold;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

          text-align: center;

          color: #fff;

          & + span {
            font-size: 1rem;
            font-weight: 400;
            color: rgba(240, 240, 240, 0.75);
          }
        }
      }
    }

    .pfp {
      @media (orientation: landscape) {
        justify-content: start;
        width: 7.38%;
        height: 67.54%;
        flex: 0;
        align-self: center;
        margin-left: 10.69%;
      }

      display: flex;
      flex: 1;

      justify-content: center;
      align-items: center;

      div {
        @media (orientation: landscape) {
          width: 100%;
          height: 100%;
        }
        display: flex;
        flex-direction: column;

        height: fit-content;

        align-items: center;

        img {
          /* position: absolute; */
          @media (orientation: landscape) {
            width: 10.6rem;
            height: 10.6rem;
          }
          width: 9.6rem;
          height: 9.6rem;
          /* left: 2.9rem;
      top: 4.1rem; */
          border-radius: 50%;
        }

        span {
          @media (orientation: landscape) {
            margin-top: 0.9rem;
          }
          margin-top: 0.2rem;

          font-size: 1.4rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

          color: #fff;
        }
      }
    }

    .ig {
      @media (orientation: landscape) {
        display: none;
        width: 0;
        height: 0;
      }
      display: flex;
      flex: 0.405;

      align-items: flex-end;
      justify-content: flex-end;

      padding-right: 0.3rem;
      padding-bottom: 0.1rem;

      svg {
        width: 4rem;
        height: 4rem;
      }
    }
  }
`;
