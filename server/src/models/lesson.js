import mongoose from 'mongoose';

const lessonSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true
  },
  dayOfWeek: {
    type: Number,
    min: 1,
    max: 7,
  },
  classHour: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ClassHour',
  },
});

const Lesson = mongoose.model('lessons', lessonSchema);

export default Lesson;
