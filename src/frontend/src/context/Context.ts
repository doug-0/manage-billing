import { createContext } from 'react';
import ContextData from '../interface/ContextData';

const initialState = {
  showFormTreatment: false,
  setShowFormTreatment: () => {},
};

const Context = createContext<ContextData>(initialState);

export default Context;
