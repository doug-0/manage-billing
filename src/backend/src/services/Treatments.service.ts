import TreatmentModel from '../database/models/TreatmentModel';

import TreatmentsData from '../interface/TreatmentData';
import formateDate from '../helpers/formateDate';
import valueParcel from '../helpers/valueParcel';

const moment = require('moment');

class TreatmentService {
  static createNewTreatment = async (
    treatmentInformation: TreatmentsData,
  ): Promise<TreatmentsData | void | null> => {
    const {
      numberParcel,
      serviceDate,
      serviceValue,
    } = treatmentInformation;
    const parcelValue = valueParcel(serviceValue, numberParcel);
    const newDateFormated = moment(serviceDate).format('DD/MM/YYYY');
    const finalDate = formateDate(serviceDate, numberParcel);

    try {
      const newTreatment = await TreatmentModel.create({
        ...treatmentInformation,
        serviceDate: newDateFormated,
        finalDate,
        parcelValue,
      });

      if (!newTreatment) return null;

      return newTreatment as TreatmentsData;
    } catch (error) {
      return console.log(error);
    }
  };

  static deleteTreatment = async (id: string): Promise<boolean | null | void> => {
    try {
      const result = await TreatmentModel.deleteOne({ _id: id });

      if (!result) return null;

      return true;
    } catch (error) {
      return console.log(error);
    }
  };

  static getAll = async (): Promise<TreatmentsData[] | null | void> => {
    try {
      const allTreatments = await TreatmentModel.find();

      if (!allTreatments) return null;

      return allTreatments as TreatmentsData[];
    } catch (error) {
      return console.log(error);
    }
  };

  static updateTreatments = async (
    updateData: TreatmentsData,
    id: string,
  ): Promise<void | null | TreatmentsData> => {
    try {
      const treatmentUpdated = await TreatmentModel.findOneAndUpdate(
        { _id: id },
        updateData,
      );

      if (!treatmentUpdated) return null;

      return treatmentUpdated as TreatmentsData;
    } catch (error) {
      return console.log(error);
    }
  };
}

export default TreatmentService;
