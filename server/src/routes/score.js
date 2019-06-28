import { Router } from 'express';
import { score } from '../controllers';

const router = Router();
router.get('/', score.list);
router.get('/studentId', score.getById);

export default router;
