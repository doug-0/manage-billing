export interface ITreatments {
  _id: string;
  pacientName: string;
  treatmentName: string;
  paymentMethod: string;
  numberParcel: number;
  serviceDate: string,
  serviceValue: number;
  __v: number;
}

export interface NewTreatment {
  pacientName: string;
  treatmentName: string;
  paymentMethod: string;
  numberParcel: number;
  serviceDate: string;
  serviceValue: number;
}

export interface checkTreatmentData {
  pacientName: string;
  treatmentName: string;
  paymentMethod: string;
  serviceValue: number;
  serviceDate: string;
}
