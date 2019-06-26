import models from '../models';
const ClassHour = models.ClassHour;

const list = async (req, res) => {
  try {
    console.log('xxx 001 ');
    const classHours = await ClassHour.find();
    console.log('xxx 002 ', classHours);
    return res.send(classHours);
  } catch (error) {
    return res.send(error);
  }
};

module.exports = {
  list,
};
