import { useState, useEffect, useContext } from 'react';

import NewTreatments from '../components/NewTreatments';
import { getAllTreatments } from '../utils/requestAPI';

import { ITreatments } from '../interface/Treatments';
import Context from '../context/Context';
import { ContainerTable, TableTreatment, TotalValue } from '../styles/Treatments';

export default function Treatments(): JSX.Element {
  const { showFormTreatment } = useContext(Context);
  const [dataTreatments, setDataTreatments] = useState<ITreatments[]>([]);
  const myBilling: number[] = [0];

  const getTreatments = async () => {
    const data = await getAllTreatments();
    setDataTreatments(data);
  };

  useEffect(() => {
    getTreatments();
  }, []);

  if (dataTreatments.length === 0) {
    return (
      <h1>Carregando</h1>
    );
  }

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
                  <td>{ numberParcel }</td>
                  <td>
                    { serviceDate }
                    { ' ' }
                    até
                    { ' ' }
                    { serviceDate }
                  </td>
                  <td>{ serviceValue }</td>
                  <td>Excluir</td>
                </tr>
              </tbody>
            );
          })
        }
        </TableTreatment>
      </ContainerTable>
      <TotalValue>
        Valor Total: R$
        { ' ' }
        { myBilling.reduce((prev, curr) => prev + curr) }
      </TotalValue>
    </>
  );
}
