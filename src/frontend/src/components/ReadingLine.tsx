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
        R$
        {' '}
        { el.parcelValue.toFixed(2).replace('.', ',') }
      </td>
      <td>
        { el.serviceDate }
        { ' ' }
        até
        { ' ' }
        { el.finalDate }
      </td>
      <td>
        R$
        {' '}
        { el.serviceValue.toFixed(2).replace('.', ',') }
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
