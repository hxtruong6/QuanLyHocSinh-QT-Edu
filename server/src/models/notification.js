import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Notification = mongoose.model(
  'Notification',
  notificationSchema,
);

export default Notification;
