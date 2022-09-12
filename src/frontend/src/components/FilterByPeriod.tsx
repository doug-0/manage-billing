import { useContext, useState } from 'react';
import Context from '../context/Context';

export default function FilterByPeriod({
  filterPeriod,
  setFirstDateFilter,
  setLastDateFilter,
  setIsFilter,
  isFilter,
}: any) {
  const { setRefresh, refresh } = useContext(Context);
  const [initalDate, setInitialDate] = useState('2000-01-01');

  return (
    <div>
      Filtrar por período
      <div>
        de:
        { '  ' }
        <input
          type="date"
          onChange={({ target }) => {
            setFirstDateFilter(target.value);
          }}
          defaultValue={initalDate}
        />
      </div>
      <div>
        até:
        { '  ' }
        <input
          type="date"
          onChange={({ target }) => {
            setLastDateFilter(target.value);
          }}
          defaultValue={initalDate}
        />
      </div>
      <button
        type="button"
        onClick={() => {
          filterPeriod();
          setIsFilter(false);
        }}
      >
        Filtrar
      </button>
      <button
        disabled={isFilter}
        type="button"
        onClick={() => {
          setIsFilter(true);
          setRefresh(!refresh);
          setInitialDate('');
        }}
      >
        Limpar Filtros
      </button>
    </div>
  );
}
