import { useState, useEffect, useContext } from 'react';

import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import NewTreatments from '../components/NewTreatments';
import { getAllTreatments } from '../utils/requestAPI';

import { ITreatments } from '../interface/Treatments';
import Context from '../context/Context';
import {
  ContainerTable, DivTable, TableTreatment, TotalValue,
} from '../styles/Treatments';
import EditableLine from '../components/EditableLine';
import ReadingLine from '../components/ReadingLine';
import FilterByPeriod from '../components/FilterByPeriod';

export default function Treatments(): JSX.Element {
  const navigate = useNavigate();
  const { showFormTreatment, refresh } = useContext(Context);
  const [dataTreatments, setDataTreatments] = useState<ITreatments[]>([]);
  const [editTreatmentId, setEditTreatmentTd] = useState<any>(null);
  const [firstDateFilter, setFirstDateFilter] = useState('');
  const [lastDateFilter, setLastDateFilter] = useState('');
  const [isFilter, setIsFilter] = useState(true);
  const myBilling: number[] = [0];

  const getTreatments = async () => {
    setTimeout(async () => {
      const data = await getAllTreatments();

      setDataTreatments(data);
    }, 100);
  };

  useEffect(() => {
    const idUser = localStorage.getItem('id');
    if (!idUser) {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Ops!',
        text: 'Parece que você não realizou login',
        showConfirmButton: true,
      });
      navigate('/login');
      return;
    }
    getTreatments();
  }, [refresh]);

  const showEditLine = (id: any) => {
    if (!id) return setEditTreatmentTd('');

    return setEditTreatmentTd(id);
  };

  const convertDate = (date: any) => {
    const dataSplit = date.split('/').reverse().join('-');

    const newDate = new Date(dataSplit);

    return newDate;
  };

  const filterPeriod = async (): Promise<any> => {
    const data = await getAllTreatments();

    const initialDateFilter = new Date(firstDateFilter);
    const finalDateFilter = new Date(lastDateFilter);

    if (finalDateFilter < initialDateFilter) {
      console.log('ta aqui');
      return Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Ops!',
        text: 'A data final não pode ser menor que a data inicial',
        showConfirmButton: true,
      });
    }

    const filterDataTreatments = data
      .filter((el) => convertDate(
        el.serviceDate,
      ) >= initialDateFilter && convertDate(el.serviceDate) <= finalDateFilter);

    return setDataTreatments(filterDataTreatments);
  };

  const Props = {
    filterPeriod,
    setFirstDateFilter,
    setLastDateFilter,
    setIsFilter,
    isFilter,
  };

  return (
    <>

      <ContainerTable>
        {
        showFormTreatment && <NewTreatments />
        }
        <FilterByPeriod {...Props} />
        <DivTable>
          <TableTreatment>
            <thead>
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
            </thead>
            <tbody>
              {
                dataTreatments.map((el) => {
                  const props = { showEditLine, el };
                  const {
                    serviceValue,
                  } = el;
                  myBilling.push(serviceValue);

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
        </DivTable>
      </ContainerTable>
      <TotalValue>
        Valor Total:
        { ' ' }
        { (myBilling.reduce((prev, curr) => prev + curr)).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }) }
      </TotalValue>
    </>
  );
}
