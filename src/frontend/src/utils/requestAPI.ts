import axios from 'axios';
import Swal from 'sweetalert2';
import { NewTreatment } from '../interface/Treatments';

const BASE_URL = import.meta.env.VITE_REACT_API_LINK;
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};

const loginUser = async (email: string, password: string): Promise<boolean | void | any> => {
  try {
    const { data } = await axios
      .post(`${BASE_URL}/user/login`, { email, password }, { headers });

    if (!data) return false;

    localStorage.setItem('id', JSON.stringify(data.id));

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const createTreatment = async (
  newTreatment: NewTreatment,
): Promise<void | null | NewTreatment> => {
  try {
    const { data } = await axios.post(`${BASE_URL}/treatments`, newTreatment, { headers });

    if (!data) return null;

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Feito!',
      text: 'Tratamento adicionado com sucesso!',
      showConfirmButton: false,
      timer: 1500,
    });

    return data;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Alguma coisa deu errado!',
    });

    return console.error(error);
  }
};

export default loginUser;
