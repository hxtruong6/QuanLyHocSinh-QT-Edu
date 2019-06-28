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
  student: {
    id: {
      type: String,
      required: function() {
        return this.type === 'STUDENT';
      },
    },
    seen: {
      type: Boolean,
      default: false,
    },
  },
});

const Notification = mongoose.model(
  'Notification',
  notificationSchema,
);

export default Notification;
