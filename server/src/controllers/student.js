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
    const { sId, fullName } = req.body;
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
  try {
    const { studentId } = req.params;
    const student = await Student.findById(studentId);
    console.log('xxx student will delete: ', student);
    let result = null;
    if (student) {
      result = await student.deleteOne();
      console.log('xxx delete: ', result);
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
