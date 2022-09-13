import { useContext } from 'react';

import Swal from 'sweetalert2';
import { deleteTreatment } from '../utils/requestAPI';
import { ButtonAction } from '../styles/Treatments';
import Context from '../context/Context';
import { ITreatment } from '../interface/Treatments';

export default function ReadingLine({
  el,
  showEditLine,
}: ITreatment) {
  const { setRefresh, refresh } = useContext(Context);

  const confirmeDelete = async () => {
    await Swal.fire({
      title: 'Você tem certeza que deseja excluir este tratamento?',
      text: 'Você não poderá reverter isso!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sim, exclua!',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTreatment(el._id);
        setRefresh(!refresh);
      }
    });
  };

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
          onClick={() => confirmeDelete()}
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
