import styled from 'styled-components';

export const LoginContainer = styled.div`
  background-image: linear-gradient(180deg, #f1f9ff 0%, #e7f0f0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const TextWelcome = styled.div`
  filter: drop-shadow(8px 8px 3px lightgray);
`;

export const MiddleLine = styled.div`
  background-color: lightgray;
  width: 1px;
  height: 600px;
  margin: 0px 150px 0px 150px;
`;

export const FormLogin = styled.form`
  border-radius: 15px;
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 5px 15px 15px lightgray;
  padding: 20px;
`;

export const InputLoginUser = styled.input`
  width: 250px;
  margin-bottom: 15px;
  background-color: transparent;
  padding: 10px;
  border: none;
  border-bottom: 1px solid lightgray;
  &:focus {
    outline: none;
    border-bottom: 1px solid lightblue;
  };
`;

export const ButtonLogin = styled.button`
  border: none;
  background-color: lightblue;
  border-radius: 4px;
  width: 200px;
  padding: 10px;
  margin-top: 30px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    background-color: #BBD5F7;
    border-radius: 20px;
  }
  &:disabled {
    background-color: lightblue;
    border-radius: 4px;
    cursor: not-allowed;
  }
`;