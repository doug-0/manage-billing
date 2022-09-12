/* eslint-disable react/jsx-no-constructed-context-values */
import { useState } from 'react';
import Context from './Context';
import { Props } from '../interface/PropsChildren';

export default function Provider({ children }: Props) {
  const [showFormTreatment, setShowFormTreatment] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const myContext = {
    showFormTreatment,
    setShowFormTreatment,
    refresh,
    setRefresh,
  };

  return (
    <Context.Provider value={myContext}>
      {children}
    </Context.Provider>
  );
}
