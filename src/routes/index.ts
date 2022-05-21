//router index file
import { Router } from 'express';
import wishRouter from './wishRouter';


const router = Router();
router.use('/wish', wishRouter);


export default router;