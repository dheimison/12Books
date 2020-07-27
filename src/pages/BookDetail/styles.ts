import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  background: #38295b;

  button {
    width: 50px;
    height: 50px;
    background: none;
    border: none;
    margin-top: 50px;
    position: absolute;
    left: 40px;

    @media (max-width: 750px) {
      left: 10px;
      width: 30px;
      height: 30px;

      svg {
        width: 30px;
        height: 30px;
      }
    }
  }

  div {
    width: 30vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media (max-width: 750px) {
      width: 100vw;
      align-items: center;
    }

    img {
      height: 600px;
      margin-top: 50px;
      margin-bottom: 50px;

      @media (max-width: 750px) {
        height: 300px;
        margin-bottom: 20px;
      }
    }

    p {
      font-size: 18px;
      font-weight: bold;
      color: #fcfcca;
      margin-bottom: 15px;
      width: 100vw;
      max-width: 640px;

      @media (max-width: 750px) {
        padding: 0 15px 15px 15px;
      }

      @media (max-width: 1000px) and (min-width: 751px) {
        width: 60vw;
      }
    }
  }
`;

export const BookData = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 40px;

  @media (max-width: 750px) {
    position: initial;
    top: none;
    left: none;
    align-items: center;
  }

  @media (min-width: 751px) and (max-width: 1150px) {
    left: 20px;
  }

  span {
    font-size: 30px;
    font-weight: bold;
    color: #fcfcca;
    margin-bottom: 20px;

    @media (max-width: 750px) {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }

  h1 {
    font-size: 60px;
    font-weight: bold;
    color: #fcfcca;

    @media (max-width: 750px) {
      font-size: 40px;
      margin-bottom: 20px;
      text-align: center;
    }

    @media (min-width: 751px) and (max-width: 1150px) {
      font-size: 45px;
    }
  }
`;
