import models from '../models';
const Student = models.Student;

const list = async (req, res) => {
  try {
    const students = await Student.find();
    return res.send(students);
  } catch (error) {
    return res.send(error);
  }
};

const get = async (req, res) => {
  try {
    console.log('xxx001 get ', req.params);
    const student = await Student.findById(req.params.studentId);
    return res.send(student);
  } catch (error) {
    return res.send(error);
  }
};

const post = async (req, res) => {
  try {
    const student = await Student.create({
      sId,
      fullName,
    });

    return res.send(student);
  } catch (error) {
    return res.send(error);
  }
};

const remove = async (req, res) => {
  console.log('xxx req: ', req.params);
  try {
    const student = await req.context.models.Student.findById(req.params.studentId);
    let result = null;
    if (student) {
      result = await req.context.models.Student.deleteOne();
    }
    return res.send(result);
  } catch (error) {
    return res.send(error);
  }
};

module.exports = {
  list,
  get,
  post,
  remove,
};
