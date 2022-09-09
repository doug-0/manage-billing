export default function NewTreatments(): JSX.Element {
  const parcel: number[] = Object.keys(new Array(12).fill(null)).map(Number);

  return (
    <div>
      <form>
        <label htmlFor="input-name-patient">
          Nome do paciente:
          { ' ' }
          <input
            type="text"
          />
        </label>
        <label htmlFor="input-name-treatment">
          Nome do tratamento:
          { ' ' }
          <input
            type="text"
          />
        </label>
        <label htmlFor="payment-method">
          Forma de pagamento:
          { ' ' }
          <select>
            <option>----</option>
            <option>Pix</option>
            <option>Cartão</option>
          </select>
        </label>
        <label htmlFor="input-parcel">
          Parcelas:
          { ' ' }
          <select>
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
          </select>
        </label>
        <label htmlFor="service-date">
          Data do atendimento:
          { ' ' }
          <input type="date" min="1990-01-01" max="2100-12-31" />
        </label>
        <button
          type="button"
        >
          Adicionar
        </button>
      </form>
    </div>
  );
}
