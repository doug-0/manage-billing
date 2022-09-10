import { useState, useEffect, useContext } from 'react';

import NewTreatments from '../components/NewTreatments';

import mockTreatments from '../mocks/data';
import { ITreatments } from '../interface/Treatments';
import Context from '../context/Context';
import { ContainerTable, TableTreatment, TotalValue } from '../styles/Treatments';

export default function Treatments(): JSX.Element {
  const { showFormTreatment } = useContext(Context);
  const [dataTreatments, setDataTreatments] = useState<ITreatments[]>([]);
  const myBilling: number[] = [0];

  useEffect(() => {
    setDataTreatments(mockTreatments);
  }, []);

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
              id,
              nomeDoTratamento,
              nomePaciente,
              formaDePagamento,
              qntParcelas,
              dataAtendimento,
              valor,
            } = el;
            myBilling.push(valor);
            return (
              <tbody key={id}>
                <tr>
                  <td>{ nomePaciente }</td>
                  <td>{ nomeDoTratamento }</td>
                  <td>{ formaDePagamento }</td>
                  <td>{ qntParcelas }</td>
                  <td>
                    { dataAtendimento }
                    { ' ' }
                    até
                    { ' ' }
                    { dataAtendimento }
                  </td>
                  <td>{ valor }</td>
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
