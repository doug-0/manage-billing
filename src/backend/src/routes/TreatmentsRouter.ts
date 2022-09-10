import { Router } from 'express';
import TreatmentsController from '../controllers/TreatmentsController';

const treatmentsRouter = Router();

treatmentsRouter.post('/', TreatmentsController.createNewTreatment);
treatmentsRouter.delete('/:id', TreatmentsController.deleteTreatment);

export default treatmentsRouter;
