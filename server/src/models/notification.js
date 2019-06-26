import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  title: String,
  content: String,
  type: {
    type: String,
    enum: ['ALL', 'CLASS', 'STUDENT'],
  },
  class: {
    type: String,
    required: function() {
      return this.type === 'CLASS';
    },
  },
  studentId: {
    type: String,
    required: function() {
      return this.type === 'STUDENT';
    },
  },
});

const Notification = mongoose.model(
  'Notification',
  notificationSchema,
);

export default Notification;
