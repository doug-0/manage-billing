import { Router } from 'express';
import TreatmentsController from '../controllers/TreatmentsController';

const treatmentsRouter = Router();

treatmentsRouter.post('/', TreatmentsController.createNewTreatment);

export default treatmentsRouter;
