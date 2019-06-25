import mongoose from 'mongoose';

// import User from './user';
// import Message from './message';
import Student from './student';
import Grade from './grade';
import Lesson from './lesson';
import ClassHour from './classHour';
import Notification from './notification';

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
  });
};

const models = {
  Student,
  // User,
  // Message,
};

export { connectDb };

export default models;
