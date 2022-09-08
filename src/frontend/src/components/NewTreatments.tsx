export default function NewTreatments(): JSX.Element {
  const parcel: number[] = Object.keys(new Array(12).fill(null)).map(Number);

  return (
    <div>
      <form>
        Nome do paciente:
        { ' ' }
        <input
          type="text"
        />
        Nome do tratamento:
        { ' ' }
        <input
          type="text"
        />
        Forma de pagamento:
        { ' ' }
        <select>
          <option>----</option>
          <option>Pix</option>
          <option>Cartão</option>
        </select>
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
        Data do atendimento:
        { ' ' }
        <input type="text" />
        <button
          type="button"
        >
          Adicionar
        </button>
      </form>
    </div>
  );
}
