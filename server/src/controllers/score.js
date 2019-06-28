import models from '../models';
const Score = models.Score;

const list = async (req, res) => {
  try {
    const scores = await Score.find();
    return res.send(scores);
  } catch (error) {
    return res.send(error);
  }
};

const getById = async (req, res) => {
  try {
    console.log('xxx001 get ', req.params);
    const { studentId } = req.params;
    const score = await Score.find({ student: studentId });
    return res.send(score);
  } catch (error) {
    return res.send(error);
  }
};

module.exports = {
  list,
  getById,
};
