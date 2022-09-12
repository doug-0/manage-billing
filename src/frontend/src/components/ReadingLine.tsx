import { useContext } from 'react';

import { deleteTreatment } from '../utils/requestAPI';
import { ButtonAction } from '../styles/Treatments';
import Context from '../context/Context';
import { ITreatment } from '../interface/Treatments';

export default function ReadingLine({
  el,
  showEditLine,
}: ITreatment) {
  const { setRefresh, refresh } = useContext(Context);
  return (
    <>
      <td>{ el.pacientName }</td>
      <td>{ el.treatmentName }</td>
      <td>{ el.paymentMethod }</td>
      <td>
        { el.numberParcel }
        x
      </td>
      <td>
        { el.parcelValue.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }) }
      </td>
      <td>
        { el.serviceDate }
        { ' ' }
        até
        { ' ' }
        { el.finalDate }
      </td>
      <td>
        { el.serviceValue.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }) }
      </td>
      <td>
        <ButtonAction
          type="button"
          onClick={() => {
            deleteTreatment(el._id);
            setRefresh(!refresh);
          }}
        >
          <img src="https://img.icons8.com/glyph-neue/25/FA5252/delete.png" alt="delete-icon" />
        </ButtonAction>
        <ButtonAction
          type="button"
          onClick={() => showEditLine(el._id)}
        >
          <img src="https://img.icons8.com/glyph-neue/25/40C057/pencil.png" alt="edit-icon" />
        </ButtonAction>
      </td>
    </>
  );
}
