import mongoose from 'mongoose';

const gradeSchema = new mongoose.Schema({
  final: Number,
  mid: Number,
  oralTest: [Number],
  fifthMins: [Number],
  sixtyMins: [Number],
  bonus: [Number],
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
});

const Grade = mongoose.model('Student', gradeSchema);

export default Grade;
