import { useContext, useState } from 'react';
import { createTreatment } from '../utils/requestAPI';

import {
  Button,
  Calendar,
  ContainerLabel,
  FormContainer, FormTreatment, InputFormTreatment, LabelInputText, SelectDropDown,
} from '../styles/FormTreatment';
import { NewTreatment } from '../interface/Treatments';
import Context from '../context/Context';

export default function NewTreatments(): JSX.Element {
  const { refresh, setRefresh } = useContext(Context);
  const [disabledOption, setdisabledOption] = useState(false);
  const [newTreatment, setNewTreatment] = useState<NewTreatment>({
    pacientName: '',
    treatmentName: '',
    paymentMethod: '',
    numberParcel: 0,
    serviceDate: '',
    serviceValue: 0,
  });
  const parcel: number[] = Object.keys(new Array(12).fill(null)).map(Number);

  const checkPaymentMethod = (method: string): boolean | void => {
    if (method === 'Pix') {
      setNewTreatment({
        ...newTreatment,
        paymentMethod: 'Pix',
        numberParcel: 0,
      });

      return setdisabledOption(true);
    }

    setNewTreatment({
      ...newTreatment,
      paymentMethod: 'Cartão',
    });

    return setdisabledOption(false);
  };

  return (
    <FormContainer>
      <FormTreatment>
        <ContainerLabel>
          <LabelInputText htmlFor="input-name-patient">
            Nome do paciente:
            { ' ' }
            <InputFormTreatment
              type="text"
              onChange={({ target }) => setNewTreatment({
                ...newTreatment,
                pacientName: target.value,
              })}
              placeholder="Ex.: Jose da Silva"
            />
          </LabelInputText>
          <LabelInputText htmlFor="input-name-treatment">
            Nome do tratamento:
            { ' ' }
            <InputFormTreatment
              type="text"
              placeholder="Ex.: Canal"
              onChange={({ target }) => setNewTreatment({
                ...newTreatment,
                treatmentName: target.value,
              })}
            />
          </LabelInputText>
          <LabelInputText htmlFor="service-date">
            Data do atendimento:
            { ' ' }
            <Calendar
              type="date"
              min="1990-01-01"
              max="2100-12-31"
              onChange={({ target }) => setNewTreatment({
                ...newTreatment,
                serviceDate: target.value,
              })}
            />
          </LabelInputText>
        </ContainerLabel>
        <ContainerLabel>
          <LabelInputText htmlFor="input-value-treatment">
            Valor do tratamento:
            { ' ' }
            <InputFormTreatment
              type="number"
              min="0"
              onChange={({ target }) => setNewTreatment({
                ...newTreatment,
                serviceValue: Number(target.value),
              })}
              placeholder="Ex.: 159.99"
            />
          </LabelInputText>
          <label htmlFor="payment-method">
            Forma de pagamento:
            { ' ' }
            <SelectDropDown
              onChange={({ target }) => checkPaymentMethod(target.value)}
            >
              <option>----</option>
              <option>Pix</option>
              <option>Cartão</option>
            </SelectDropDown>
          </label>
          <label htmlFor="input-parcel">
            Parcelas:
            { ' ' }
            <SelectDropDown
              disabled={disabledOption}
              onChange={({ target }) => setNewTreatment({
                ...newTreatment,
                numberParcel: Number(target.value),
              })}
            >
              <option>----</option>
              {
              parcel.map((el) => (
                <option
                  key={el}
                  value={el + 1}
                >
                  {el + 1}
                  x
                </option>
              ))
            }
            </SelectDropDown>
          </label>
          <Button
            type="button"
            onClick={() => {
              createTreatment(newTreatment);
              setRefresh(!refresh);
            }}
          >
            Adicionar
          </Button>
        </ContainerLabel>
      </FormTreatment>
    </FormContainer>
  );
}
