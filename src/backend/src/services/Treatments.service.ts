import TreatmentModel from '../database/models/TreatmentModel';

import TreatmentsData from '../interface/TreatmentData';

class TreatmentService {
  static createNewTreatment = async (
    treatmentInformation: TreatmentsData,
  ): Promise<TreatmentsData | void| null> => {
    try {
      const newTreatment = await TreatmentModel.create(treatmentInformation);

      if (!newTreatment) return null;

      return newTreatment as TreatmentsData;
    } catch (error) {
      return console.log(error);
    }
  };
}

export default TreatmentService;
