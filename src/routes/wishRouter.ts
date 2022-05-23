import { Router } from "express";
import { body } from "express-validator/check";
import { wishController } from "../controllers";
import wishController from '../controllers/wishController';

const router: Router = Router();

router.post('/', [
    body("name").notEmpty(),
], wishController.createWish);


router.post('/:wishId', wishController.postRoomInWish);
export default router;
