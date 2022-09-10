import axios from 'axios';

const BASE_URL = import.meta.env.VITE_REACT_API_LINK;
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};

const loginUser = async (email: string, password: string): Promise<boolean | void> => {
  try {
    const { data } = await axios
      .post(`${BASE_URL}/user/login`, { email, password }, { headers });

    if (!data) return false;

    localStorage.setItem('id', JSON.stringify(data.id));

    return true;
  } catch (error) {
    return console.error(error);
  }
};

export default loginUser;
