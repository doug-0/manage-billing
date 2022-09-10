import { Request, Response } from 'express';
import TreatmentService from '../services/Treatments.service';

import ControllerErrors from '../interface/ControllerErrors';

class TreatmentsController {
  static createNewTreatment = async (req: Request, res: Response): Promise<typeof res> => {
    const {
      pacientName,
      treatmentName,
      paymentMethod,
      numberParcel,
      serviceDate,
      serviceValue,
    } = req.body;

    try {
      const newTreatment = await TreatmentService.createNewTreatment({
        pacientName,
        treatmentName,
        paymentMethod,
        numberParcel,
        serviceDate,
        serviceValue,
      });

      if (!newTreatment) return res.status(404).json(ControllerErrors.badRequest);

      return res.status(200).json(newTreatment);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  static deleteTreatment = async (req: Request, res: Response): Promise<typeof res> => {
    const { id } = req.params;

    try {
      const deletedTreatment = await TreatmentService.deleteTreatment(id);

      if (!deletedTreatment) return res.status(404).json(ControllerErrors.badRequest);

      return res.status(204).end();
    } catch (error) {
      return res.status(500).json(error);
    }
  };
}

export default TreatmentsController;
