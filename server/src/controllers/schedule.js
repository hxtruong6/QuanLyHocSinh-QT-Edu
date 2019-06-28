import models from '../models';
const ClassHour = models.ClassHour;
const Lesson = models.Lesson;

const list = async (req, res) => {
  try {
    const classHours = await ClassHour.find();
    const lessons = await Lesson.find();
    return res.send({ classHours, lessons });
  } catch (error) {
    return res.send(error);
  }
};

module.exports = {
  list,
};
