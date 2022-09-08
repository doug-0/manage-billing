import { useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import checkDataUser from '../utils/validateData';

export default function Register() {
  // const navigate = useNavigate();
  const [emailUser, setEmailUser] = useState('');
  const [passUser, setPassUser] = useState('');
  // const BASE_URL = process.env.REACT_APP_API_LINK;

  // aqui será feito request para API, para realizar login.
  const registerUser = async (email: string, password: string): Promise<void> => {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    };

    console.log(email, password, headers);
    // try {
    //   const { data } = await axios
    // .post(`${BASE_URL}/user/register`, { email, password }, { headers });

    //   localStorage.setItem('token', JSON.stringify(data.token));
    //   localStorage.setItem('id', JSON.stringify(data.id));

    //   return navigate(`/contacts/${data.id}`);
    // } catch (error) {
    //   return console.error(error);
    // }
  };

  return (
    <div>
      <div>
        <h4>Crie sua conta!</h4>
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
            onClick={() => registerUser(emailUser, passUser)}
          >
            Criar Conta
          </button>
        </div>
        <Link
          to="/login"
        >
          Retornar para login
        </Link>
      </div>
    </div>
  );
}
