import { useContext } from 'react';
import Context from '../context/Context';
import { ButtonsHeader, HeaderContainer } from '../styles/Header';

export default function Header(): JSX.Element {
  const { showFormTreatment, setShowFormTreatment } = useContext(Context);

  return (
    <HeaderContainer>
      <div>
        <img src="https://img.icons8.com/dusk/64/000000/dental-crown.png" alt="tooth-icon" />
      </div>
      <div>
        <ButtonsHeader
          type="button"
          onClick={() => setShowFormTreatment(!showFormTreatment)}
        >
          {
            showFormTreatment ? 'Fechar Formulário' : 'Registrar Novo Tratamento'
          }
        </ButtonsHeader>
      </div>
      <div>
        <ButtonsHeader
          href="/"
          onClick={() => localStorage.clear()}
        >
          Logout
        </ButtonsHeader>
      </div>
    </HeaderContainer>
  );
}
