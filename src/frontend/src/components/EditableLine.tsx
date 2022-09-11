/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import { useState } from 'react';

import { ButtonAction } from '../styles/Treatments';
import { ITreatment } from '../interface/Treatments';
import { SelectDropDown } from '../styles/FormTreatment';

export default function EditableLine({
  el,
  showEditLine,
}: ITreatment) {
  const parcel: number[] = Object.keys(new Array(12).fill(null)).map(Number);
  const [myTreatmentUpdated, setMyTreatmentUpdated] = useState({
    _id: el._id,
    pacientName: el.pacientName,
    treatmentName: el.treatmentName,
    paymentMethod: el.paymentMethod,
    numberParcel: el.numberParcel,
    serviceDate: el.serviceDate,
    serviceValue: el.serviceValue,
  });
  const [isDisabled, setIsDisabled] = useState(false);

  const checkPaymentMethod = (method: string): boolean | void => {
    if (method === 'Pix') {
      setMyTreatmentUpdated({
        ...myTreatmentUpdated,
        paymentMethod: 'Pix',
        numberParcel: 0,
      });

      return setIsDisabled(true);
    }

    setMyTreatmentUpdated({
      ...myTreatmentUpdated,
      paymentMethod: 'Cartão',
    });

    return setIsDisabled(false);
  };

  return (
    <>
      <td>
        <input
          type="text"
          defaultValue={el.pacientName}
          onChange={
            ({ target }) => {
              setMyTreatmentUpdated({
                ...myTreatmentUpdated,
                pacientName: target.value,
              });
            }
          }
        />
      </td>
      <td>
        <input
          type="text"
          defaultValue={el.treatmentName}
          onChange={
            ({ target }) => {
              setMyTreatmentUpdated({
                ...myTreatmentUpdated,
                treatmentName: target.value,
              });
            }
          }
        />
      </td>
      <td>
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
      </td>
      <td>
        <label htmlFor="input-parcel">
          Parcelas:
          { ' ' }
          <SelectDropDown
            disabled={isDisabled}
            onChange={
              ({ target }) => {
                setMyTreatmentUpdated({
                  ...myTreatmentUpdated,
                  numberParcel: Number(target.value),
                });
              }
            }
          >
            <option>----</option>
            {
              parcel.map((element) => (
                <option
                  key={element}
                  value={element + 1}
                >
                  {element + 1}
                  x
                </option>
              ))
            }
          </SelectDropDown>
        </label>
      </td>
      <td>
        <input
          type="text"
          defaultValue={el.serviceDate}
          onChange={
            ({ target }) => {
              setMyTreatmentUpdated({
                ...myTreatmentUpdated,
                serviceDate: target.value,
              });
            }
          }
        />
        { ' ' }
        até
        { ' ' }
        <input
          type="text"
          defaultValue={el.serviceDate}
          onChange={
            ({ target }) => {
              setMyTreatmentUpdated({
                ...myTreatmentUpdated,
                serviceDate: target.value,
              });
            }
          }
        />
      </td>
      <td>
        R$
        {' '}
        <input
          type="text"
          defaultValue={el.serviceValue}
          onChange={
            ({ target }) => {
              setMyTreatmentUpdated({
                ...myTreatmentUpdated,
                serviceValue: Number(target.value),
              });
            }
          }
        />
      </td>
      <td>
        <ButtonAction
          type="button"
          onClick={() => { console.log('oi', myTreatmentUpdated); }}
        >
          Salvar
        </ButtonAction>
        <ButtonAction
          type="button"
          onClick={() => showEditLine(null)}
        >
          Cancelar
        </ButtonAction>
      </td>
    </>
  );
}

EditableLine.propTypes = {
  numberParcel: PropTypes.number,
  pacientName: PropTypes.string,
  paymentMethod: PropTypes.string,
  serviceDate: PropTypes.string,
  serviceValue: PropTypes.number,
  treatmentName: PropTypes.string,
};
