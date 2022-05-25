import { Router } from 'express';
import { body } from 'express-validator';
import { roomController } from '../controllers';

const router: Router = Router();

router.post('/', roomController.createRoom);

export default router;
