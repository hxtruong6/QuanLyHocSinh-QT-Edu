import mongoose from 'mongoose';

import Student from './student';
import ClassHour from './classHour';
import Lesson from './lesson';
import Score from './score';
// import Lesson from './lesson';
// import Notification from './notification';

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
  });
};

const models = {
  Student,
  ClassHour,
  Lesson,
  Score,
};

export { connectDb };

export default models;
