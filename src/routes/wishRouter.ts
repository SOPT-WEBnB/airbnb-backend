import { Router } from 'express';
import { body } from 'express-validator';
import wishController from '../controllers/wishController';

const router: Router = Router();

router.post('/:wishId', wishController.postRoomInWish);
export default router;
