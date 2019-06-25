import mongoose from 'mongoose';

const classHourSchema = new mongoose.Schema({
  number: Number,
  start: Date,
  end: Date,
});

const ClassHour = mongoose.model('ClassHour', classHourSchema);

export default ClassHour;
