import mongoose from 'mongoose';

const lessonSchema = new mongoose.Schema({
  subject: String,
  dayOfWeek: String,
  session: { type: mongoose.Schema.Types.ObjectId, ref: 'Session' },
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
});

const Lesson = mongoose.model('Lesson', lessonSchema);

export default Lesson;
