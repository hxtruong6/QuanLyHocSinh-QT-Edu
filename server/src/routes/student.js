import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const students = await req.context.models.Student.find();
  return res.send(students);
});

router.get('/:studentId', async (req, res) => {
  console.log('xxx ', req.params);
  const student = await req.context.models.Student.findById(
    req.params.studentId,
  );
  return res.send(student);
});

router.post('/', async (req, res) => {
  try {
    console.log('xxx ', req);
    const { sId, fullName } = req.body;
    const student = await req.context.models.Student.create({
      sId,
      fullName,
      // user: req.context.me.id,
    });

    return res.send(student);
  } catch (error) {
    return res.send(error);
  }
});

router.delete('/:studentId', async (req, res) => {
  const student = await req.context.models.Student.findById(
    req.params.studentId,
  );

  let result = null;
  if (student) {
    result = await student.deleteOne();
  }

  return res.send(result);
});

export default router;
