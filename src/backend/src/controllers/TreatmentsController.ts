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

  static getAllTreatment = async (_req: Request, res: Response): Promise<typeof res> => {
    try {
      const allMyTreatments = await TreatmentService.getAll();

      if (!allMyTreatments) return res.status(404).json(ControllerErrors.badRequest);

      return res.status(200).json(allMyTreatments);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  static updateTreatment = async (req: Request, res: Response) => {
    const { id } = req.params;
    const {
      numberParcel,
      pacientName,
      paymentMethod,
      serviceDate,
      serviceValue,
      treatmentName,
    } = req.body;

    try {
      const myTreatmentUpdated = await TreatmentService.updateTreatments({
        numberParcel,
        pacientName,
        paymentMethod,
        serviceDate,
        serviceValue,
        treatmentName,
      }, id);

      if (!myTreatmentUpdated) return res.status(404).json(ControllerErrors.badRequest);

      return res.status(200).json(myTreatmentUpdated);
    } catch (error) {
      return res.status(500).json(error);
    }
  };
}

export default TreatmentsController;
