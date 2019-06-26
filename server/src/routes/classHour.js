import { Router } from 'express';
import { classHour } from '../controllers';

const router = Router();
router.get('/', classHour.list);
// router.post('/', classHour.post);

export default router;
