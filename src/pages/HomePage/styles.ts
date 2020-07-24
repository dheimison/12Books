import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  background: #f75140;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: #fcfcca;
    font-size: 42px;
  }
`;

export const Container = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BookList = styled.ul`
  width: 1200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const BookItem = styled.li`
  margin: 30px 30px 0px 30px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    transform: translate(10px, -10px);
    border-radius: 5px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 280px;
    height: 400px;
  }

  span {
    color: #0a0616;
    font-size: 22px;
    margin-top: 20px;
  }

  p {
    color: #f75140;
    font-size: 36px;
    font-weight: bold;
  }
`;
