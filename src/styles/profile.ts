import styled from 'styled-components';
import { darken } from 'polished';

export const Header = styled.div`
  width: 41.4rem;
  height: 19.1rem;
  display: flex;

  div {
    align-self: end;
    justify-self: center;
    margin-bottom: 1.4rem;
    display: flex;

    img {
      margin-right: 4.5rem;
      border-radius: 50%;
    }

    #information {
      display: flex;
      flex-direction: column;
      width: 23.3rem;
      height: 10.5rem;
      justify-content: space-between;
      align-self: end;

      #username {
        width: 17.2rem;
        height: 3rem;
        border-radius: 50%;

        background: #f3f3f3;
        box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

        label {
          width: 13.1rem;
          height: 1.8rem;

          font-family: Roboto;
          font-style: normal;
          font-weight: 300;
          font-size: 1.5rem;
          line-height: 1.8rem;
          justify-content: center;
          /* identical to box height */
          display: flex;
          align-items: center;

          color: #000000;
        }
      }

      #numbers {
        width: 23.3rem;
        height: 3rem;
        display: flex;
        justify-content: space-between;

        div {
          width: 11.3rem;
          height: 3rem;

          background: #f3f3f3;
          box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

          label {
            width: 6.5rem;
            height: 1.8rem;

            font-family: Roboto;
            font-style: normal;
            font-weight: 300;
            font-size: 1.5rem;
            line-height: 1.8rem;
            /* identical to box height */
            display: flex;
            align-items: center;
            justify-content: center;

            color: #000000;
          }
        }
      }
      #follow {
        width: 11.3rem;
        height: 3rem;
        border-radius: 50%;

        background: #28b5f4;
        box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
        display: flex;
        justify-content: center;
        align-items: center;

        label {
          width: 5.2rem;
          height: 1.8rem;

          font-family: Roboto;
          font-style: normal;
          font-weight: 300;
          font-size: 1.5rem;
          line-height: 1.8rem;
          /* identical to box height */
          display: flex;
          align-items: center;

          color: #ffffff;
        }
      }

      #arrowBack {
        color: #fff;
        width: 3rem;
        height: 3rem;
        position: fixed;
        left: 0.5rem;
        top: 0.5rem;
      }

      #config {
        color: #fff;
        width: 3rem;
        height: 3rem;
        position: fixed;
        left: 40.9rem;
        top: 0.5rem;
      }
    }
  }
`;

export const HeaderExtension = styled.div`
  width: 41.4rem;
  height: 3.9rem;

  background: #f8f8f8;
  box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

  label {
    position: absolute;
    width: 22.5rem;
    height: 3.8rem;
    left: 1.4rem;
    top: 19.1rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 1.8rem;
    display: flex;
    align-items: center;
    text-align: center;

    color: #00625b;
  }
`;

export const Body = styled.ul`
  margin: 2.1rem 1.5rem 1.5rem 0;
  display: flex;
  flex-direction: column;

  li {
    display: flex;
    justify-content: space-between;
    width: 38.4rem;
    height: 11.639rem;

    & + & {
      border-top: 1rem;
    }

    img {
      border-radius: 50% 50% 50% 10%;
    }

    div {
      width: 25.4rem;
      height: 11.6rem;

      background: #f6f6f6;
      box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
      border-radius: 3.5rem;
      align-items: center;
      justify-content: center;

      label {
        width: 24.1rem;
        height: 7.9rem;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 1.5rem;
        line-height: 1.8rem;
        display: flex;
        align-items: center;
        text-align: center;

        color: #00423d;
      }
    }
  }
`;
