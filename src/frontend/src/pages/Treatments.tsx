import { useState, useEffect, useContext } from 'react';

import NewTreatments from '../components/NewTreatments';
import { getAllTreatments } from '../utils/requestAPI';

import { ITreatments } from '../interface/Treatments';
import Context from '../context/Context';
import {
  ContainerTable, TableTreatment, TotalValue,
} from '../styles/Treatments';
import EditableLine from '../components/EditableLine';
import ReadingLine from '../components/ReadingLine';

export default function Treatments(): JSX.Element {
  const { showFormTreatment, refresh } = useContext(Context);
  const [dataTreatments, setDataTreatments] = useState<ITreatments[]>([]);
  const [editTreatmentId, setEditTreatmentTd] = useState<any>(null);
  const myBilling: number[] = [0];

  const getTreatments = async () => {
    setTimeout(async () => {
      const data = await getAllTreatments();

      setDataTreatments(data);
    }, 100);
  };

  useEffect(() => {
    getTreatments();
  }, [refresh]);

  const showEditLine = (id: any) => {
    if (!id) return setEditTreatmentTd('');

    return setEditTreatmentTd(id);
  };

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
              <th>Valor da parcela</th>
              <th>Período de Pagamento</th>
              <th>Valor Total</th>
              <th>Ações</th>
            </tr>
          </tbody>
          <tbody>
            {
              dataTreatments.map((el) => {
                const props = { showEditLine, el };
                const {
                  parcelValue,
                } = el;
                console.log(el);
                myBilling.push(parcelValue);
                console.log(parcelValue);
                return (
                  <tr key={el._id}>
                    {
                      editTreatmentId === el._id ? (
                        <EditableLine {...props} />
                      ) : (
                        <ReadingLine {...props} />
                      )
                    }
                  </tr>
                );
              })
            }
          </tbody>
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
