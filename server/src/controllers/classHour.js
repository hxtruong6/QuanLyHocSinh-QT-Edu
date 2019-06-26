import models from '../models';
const ClassHour = models.ClassHour;

const list = async (req, res) => {
  try {
    const classHours = await ClassHour.find();
    return res.send(classHours);
  } catch (error) {
    return res.send(error);
  }
};

const post = async (req, res) => {
  try {
    const { number, start, end } = req.body;
    const classHour = await ClassHour.create({
      number,
      start,
      end,
    });

    return res.send(classHour);
  } catch (error) {
    return res.send(error);
  }
};

module.exports = {
  list,
  post,
};
