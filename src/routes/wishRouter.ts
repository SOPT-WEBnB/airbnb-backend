import { Router } from "express";
import { body } from "express-validator/check";
import { wishController } from "../controllers";


const router: Router = Router();

router.post('/', [
    body("name").notEmpty(),
], wishController.createWish);

export default router;