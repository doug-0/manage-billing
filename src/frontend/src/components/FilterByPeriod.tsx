import { useContext, useState } from 'react';
import Context from '../context/Context';
import { DivInputDate, FilterContainer, ButtonActionFilter } from '../styles/Filter';
import { InputFormTreatment } from '../styles/FormTreatment';

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
    <FilterContainer>
      <span>
        Filtrar por período
      </span>
      <DivInputDate>
        de:
        { '  ' }
        <InputFormTreatment
          type="date"
          onChange={({ target }) => {
            setFirstDateFilter(target.value);
          }}
          defaultValue={initalDate}
        />
      </DivInputDate>
      <DivInputDate>
        até:
        { '  ' }
        <InputFormTreatment
          type="date"
          onChange={({ target }) => {
            setLastDateFilter(target.value);
          }}
          defaultValue={initalDate}
        />
      </DivInputDate>
      <ButtonActionFilter
        type="button"
        onClick={() => {
          filterPeriod();
          setIsFilter(false);
        }}
      >
        Filtrar
      </ButtonActionFilter>
      <ButtonActionFilter
        disabled={isFilter}
        type="button"
        onClick={() => {
          setIsFilter(true);
          setRefresh(!refresh);
          setInitialDate('');
        }}
      >
        Limpar Filtros
      </ButtonActionFilter>
    </FilterContainer>
  );
}
