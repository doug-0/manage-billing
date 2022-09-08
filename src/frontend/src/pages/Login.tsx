import { useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import checkDataUser from '../utils/validateData';

export default function Login() {
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
    <div>
      <div>
        <h4>Bem vindo!</h4>
        <div>
          <input
            type="text"
            placeholder="Email..."
            onChange={({ target }) => setEmailUser(target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Senha..."
            onChange={({ target }) => setPassUser(target.value)}
          />
        </div>
        <div>
          <button
            type="button"
            disabled={checkDataUser(emailUser, passUser)}
            onClick={() => loginUser(emailUser, passUser)}
          >
            Login
          </button>
        </div>
        <Link
          to="/register"
          onClick={() => localStorage.clear()}
        >
          Criar conta
        </Link>
      </div>
    </div>
  );
}
