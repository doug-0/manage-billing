import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import checkDataUser from '../utils/validateData';
import loginUser from '../utils/requestAPI';

import {
  ButtonLogin,
  ErrorInput,
  FormLogin,
  InputLoginUser,
  LoginContainer,
  MiddleLine,
  TextWelcome,
} from '../styles/Login';

export default function Login(): JSX.Element {
  const navigate = useNavigate();
  const [emailUser, setEmailUser] = useState('');
  const [passUser, setPassUser] = useState('');
  const [showError, setShowError] = useState(false);

  const login = async (): Promise<void> => {
    const isLogged = await loginUser(emailUser, passUser);

    if (!isLogged) return setShowError(true);

    return navigate('/treatments');
  };

  return (
    <LoginContainer>
      <TextWelcome>
        <h1
          style={{
            fontSize: '45px',
          }}
        >
          Olá! Seja Bem-Vindo
        </h1>
        <h4
          style={{
            fontSize: '25px',
            color: '#646464',
          }}
        >
          Entre com sua conta.
        </h4>
      </TextWelcome>
      <MiddleLine />
      <FormLogin>
        <div>
          <InputLoginUser
            type="text"
            placeholder="Email..."
            onChange={({ target }) => setEmailUser(target.value)}
          />
        </div>
        <div>
          <InputLoginUser
            type="password"
            placeholder="Senha..."
            onChange={({ target }) => setPassUser(target.value)}
          />
          {
            showError && (
            <ErrorInput>
              <img src="https://img.icons8.com/material-outlined/20/FA5252/error--v1.png" alt="erro-icon" />
              E-mail ou senha inválidos
            </ErrorInput>
            )
          }
        </div>
        <div>
          <ButtonLogin
            type="button"
            disabled={checkDataUser(emailUser, passUser)}
            onClick={() => login()}
          >
            Login
          </ButtonLogin>
        </div>
      </FormLogin>
    </LoginContainer>
  );
}
