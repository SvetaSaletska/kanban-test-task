import { Router } from 'express';
import { createBoardController, getBoardController, updateBoardController, deleteBoardController } from '../controller/board';

const router = Router();

// Маршрути для роботи з дошками
router.post('/boards', createBoardController);
router.get('/boards/:id', getBoardController);
router.put('/boards/:id', updateBoardController);
router.delete('/boards/:id', deleteBoardController);

export default router;
