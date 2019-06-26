import mongoose from 'mongoose';

const classHourSchema = new mongoose.Schema({
  number: Number,
  start: {
    hour: Number,
    minute: Number,
    // TODO: set up restrict here
  },
  end: {
    hour: Number,
    minute: Number,
  },
});

const ClassHour = mongoose.model('ClassHour', classHourSchema);

export default ClassHour;
