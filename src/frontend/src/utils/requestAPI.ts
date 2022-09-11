import axios from 'axios';
import Swal from 'sweetalert2';
import { checkTreatmentData, ITreatments, NewTreatment } from '../interface/Treatments';

const BASE_URL = import.meta.env.VITE_REACT_API_LINK;
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};

const checkData = ({
  pacientName, treatmentName, paymentMethod, serviceValue, serviceDate,
}: checkTreatmentData): boolean => {
  if (!pacientName || !treatmentName || !paymentMethod || !serviceValue || !serviceDate) {
    return true;
  }

  return false;
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
  if (checkData(newTreatment)) {
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Ops!',
      text: 'Verifique todos os campos preenchidos',
      showConfirmButton: true,
    });

    return console.error('Error!');
  }

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

export const getAllTreatments = async (): Promise<ITreatments[]> => {
  try {
    const { data } = await axios.get(`${BASE_URL}/treatments`, { headers });

    if (!data) return [];

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const deleteTreatment = async (id: string): Promise<void | any> => {
  try {
    await axios.delete(`${BASE_URL}/treatments/${id}`, { headers });

    return Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Feito!',
      text: 'Tratamento excluido com sucesso!',
      showConfirmButton: false,
      timer: 1500,
    });
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
