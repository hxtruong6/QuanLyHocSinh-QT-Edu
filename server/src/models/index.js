import mongoose from 'mongoose';

// import User from './user';
// import Message from './message';
import Student from './student';

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
