import mongoose from 'mongoose';

import Student from './student';
import ClassHour from './classHour';
// import Grade from './grade';
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
};

export { connectDb };

export default models;
