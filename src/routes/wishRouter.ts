import { Router } from 'express';
import { body } from 'express-validator';
import { wishController } from '../controllers';

const router: Router = Router();

router.post('/', [body('name').notEmpty()], wishController.createWish);

router.post('/:wishId', wishController.postRoomInWish);
router.get('/:wishId', wishController.searchRoomInWish);
export default router;
