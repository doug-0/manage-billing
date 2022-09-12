/* eslint-disable no-unused-vars */
export interface ITreatments {
  _id: string;
  pacientName: string;
  treatmentName: string;
  paymentMethod: string;
  numberParcel: number;
  serviceDate: string,
  serviceValue: number;
  finalDate: string,
  parcelValue: number,
  __v: number;
}

export interface ITreatment {
  el: ITreatments,
  showEditLine: (id: any) => void;
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
