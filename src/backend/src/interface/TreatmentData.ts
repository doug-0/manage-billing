/* eslint-disable semi */
export default interface TreatmentsData {
  pacientName: string,
  treatmentName: string,
  paymentMethod: string,
  numberParcel: number,
  serviceDate: string,
  serviceValue: string,
  parcelValue?: string | number,
};
