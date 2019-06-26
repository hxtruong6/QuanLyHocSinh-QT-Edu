import mongoose from 'mongoose';

const scoreSchema = new mongoose.Schema({
  final: Number,
  mid: Number,
  oralTest: [Number],
  fifthMins: [Number],
  sixtyMins: [Number],
  bonus: [Number],
  year: {
    type: String,
    required: true,
  },
  semester: {
    type: Number,
    required: true,
  },
  class: {
    type: Number,
    required: true,
  },
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
});

const Score = mongoose.model('Score', scoreSchema);

export default Score;
