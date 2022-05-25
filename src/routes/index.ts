import { Router } from 'express';
import roomRouter from './roomRouter';
import wishRouter from './wishRouter';

const router = Router();

router.use('/wish', wishRouter);
router.use('/room', roomRouter);
export default router;
