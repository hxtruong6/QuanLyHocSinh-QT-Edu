import { Router } from 'express';
import { classHour } from '../controllers';

const router = Router();
router.get('/', classHour.list);

export default router;
