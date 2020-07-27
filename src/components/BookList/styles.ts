import styled from 'styled-components';

export const BookListContainer = styled.ul`
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px 0;
`;

export const BookItem = styled.li`
  width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.5s;
  border: 1px solid transparent;
  cursor: pointer;

  @media (max-width: 400px) {
    width: 100%;
  }

  &:hover {
    transform: translate(5px, -5px);
    border-radius: 5px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    border-color: #c4c4c4;
  }

  img {
    height: 350px;
  }

  span {
    color: #0a0616;
    font-size: 22px;
    margin-top: 20px;
  }

  p {
    color: #f75140;
    font-size: 34px;
    font-weight: bold;
    text-align: center;
  }
`;
