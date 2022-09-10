import { useState } from 'react';
// import axios from 'axios';
import checkDataUser from '../utils/validateData';

import {
  ButtonLogin,
  FormLogin,
  InputLoginUser,
  LoginContainer,
  MiddleLine,
  TextWelcome,
} from '../styles/Login';

export default function Login(): JSX.Element {
  // const navigate = useNavigate();
  const [emailUser, setEmailUser] = useState('');
  const [passUser, setPassUser] = useState('');
  // const BASE_URL = process.env.REACT_APP_API_LINK;

  const loginUser = async (email: string, password: string): Promise<void> => {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    };
    console.log(email, password, headers);

    // try {
    //   // const { data: { id, token } } = await axios
    //   // .post(`${BASE_URL}/user/login`, { email, password }, { headers });

    //   localStorage.setItem('token', JSON.stringify(token));
    //   localStorage.setItem('id', JSON.stringify(id));

    //   return navigate(`/contacts/${id}`);
    // } catch (error) {
    //   return console.error(error);
    // }
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
        </div>
        <div>
          <ButtonLogin
            type="button"
            disabled={checkDataUser(emailUser, passUser)}
            onClick={() => loginUser(emailUser, passUser)}
          >
            Login
          </ButtonLogin>
        </div>
      </FormLogin>
    </LoginContainer>
  );
}
