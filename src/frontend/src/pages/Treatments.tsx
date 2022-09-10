import { useState, useEffect, useContext } from 'react';

import NewTreatments from '../components/NewTreatments';
import { deleteTreatment, getAllTreatments } from '../utils/requestAPI';

import { ITreatments } from '../interface/Treatments';
import Context from '../context/Context';
import {
  ButtonAction, ContainerTable, TableTreatment, TotalValue,
} from '../styles/Treatments';

export default function Treatments(): JSX.Element {
  const { showFormTreatment } = useContext(Context);
  const [dataTreatments, setDataTreatments] = useState<ITreatments[]>([]);
  const [refresh, setRefresh] = useState(false);
  const myBilling: number[] = [0];

  const getTreatments = async () => {
    const data = await getAllTreatments();

    setDataTreatments(data);
  };

  useEffect(() => {
    console.log('dentro do useEffect');
    getTreatments();
  }, [refresh]);

  return (
    <>
      <ContainerTable>
        {
        showFormTreatment && <NewTreatments />
        }
        <TableTreatment>
          <tbody>
            <tr>
              <th>Nome de Paciente</th>
              <th>Nome do Tratamento</th>
              <th>Forma de Pagamento</th>
              <th>Quantidade de parcelas</th>
              <th>Período de Pagamento</th>
              <th>Valor Total</th>
              <th>Ações</th>
            </tr>
          </tbody>
          {
          dataTreatments.map((el) => {
            const {
              _id,
              treatmentName,
              pacientName,
              paymentMethod,
              numberParcel,
              serviceDate,
              serviceValue,
            } = el;
            myBilling.push(serviceValue);
            return (
              <tbody key={_id}>
                <tr>
                  <td>{ pacientName }</td>
                  <td>{ treatmentName }</td>
                  <td>{ paymentMethod }</td>
                  <td>
                    { numberParcel }
                    x
                  </td>
                  <td>
                    { serviceDate }
                    { ' ' }
                    até
                    { ' ' }
                    { serviceDate }
                  </td>
                  <td>
                    R$
                    {' '}
                    { serviceValue }
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
                    >
                      <img src="https://img.icons8.com/glyph-neue/25/40C057/pencil.png" alt="edit-icon" />
                    </ButtonAction>
                  </td>
                </tr>
              </tbody>
            );
          })
        }
        </TableTreatment>
        {
          dataTreatments.length === 0 && (
            <div>
              Ainda não existe tratamentos registrados
            </div>
          )
        }
      </ContainerTable>
      <TotalValue>
        Valor Total: R$
        { ' ' }
        { myBilling.reduce((prev, curr) => prev + curr) }
      </TotalValue>
    </>
  );
}
