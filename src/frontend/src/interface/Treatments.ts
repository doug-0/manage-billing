export interface ITreatments {
  id: number;
  nomePaciente: string;
  nomeDoTratamento: string;
  formaDePagamento: string;
  qntParcelas: number;
  dataAtendimento: string,
  valor: number;
}

export interface NewTreatment {
  pacientName: string;
  treatmentName: string;
  paymentMethod: string;
  numberParcel: number;
  serviceDate: string;
  serviceValue: number;
}
