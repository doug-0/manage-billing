import {
  Button,
  Calendar,
  ContainerLabel,
  FormContainer, FormTreatment, InputFormTreatment, LabelInputText, SelectDropDown,
} from '../styles/FormTreatment';

export default function NewTreatments(): JSX.Element {
  const parcel: number[] = Object.keys(new Array(12).fill(null)).map(Number);

  return (
    <FormContainer>
      <FormTreatment>
        <ContainerLabel>
          <LabelInputText htmlFor="input-name-patient">
            Nome do paciente:
            { ' ' }
            <InputFormTreatment
              type="text"
            />
          </LabelInputText>
          <LabelInputText htmlFor="input-name-treatment">
            Nome do tratamento:
            { ' ' }
            <InputFormTreatment
              type="text"
            />
          </LabelInputText>
        </ContainerLabel>
        <ContainerLabel>
          <label htmlFor="payment-method">
            Forma de pagamento:
            { ' ' }
            <SelectDropDown>
              <option>----</option>
              <option>Pix</option>
              <option>Cartão</option>
            </SelectDropDown>
          </label>
          <label htmlFor="input-parcel">
            Parcelas:
            { ' ' }
            <SelectDropDown>
              <option>----</option>
              {
              parcel.map((el) => (
                <option
                  key={el}
                >
                  {el + 1}
                  x
                </option>
              ))
            }
            </SelectDropDown>
          </label>
          <label htmlFor="service-date">
            Data do atendimento:
            { ' ' }
            <Calendar type="date" min="1990-01-01" max="2100-12-31" />
          </label>
          <Button
            type="button"
          >
            Adicionar
          </Button>
        </ContainerLabel>
      </FormTreatment>
    </FormContainer>
  );
}
