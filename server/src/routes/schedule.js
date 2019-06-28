import { Router } from 'express';
import { schedule } from '../controllers';

const router = Router();
router.get('/', schedule.list);

export default router;
