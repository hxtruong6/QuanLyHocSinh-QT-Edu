import { Router } from 'express';
import { student } from '../controllers';

const router = Router();
console.log(' student ', student);
router.get('/', student.list);
router.get('/:studentId', student.get);
router.post('/', student.post);
router.delete('/:studentId', student.remove);

export default router;
