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
    text-align: center;
  }
`;

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => (props.disabled ? '#c4c4c4' : '#f75140')};
  margin-right: 10px;
  margin-bottom: 20px;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
