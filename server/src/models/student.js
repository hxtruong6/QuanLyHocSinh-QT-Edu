import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  sId: {
    type: String,
    unique: true,
  },
  fullName: String,
  birthday: Date,
  gender: String,
  address: String,
  phone: String,
  avatar: String,
  email: String,
  room: String,
  schoolYear: String,
  currSchoolYear: String,
  currSemester: Number,
});

// studentSchema.pre('remove', function(next) {
//   this.model('Student').deleteMany({ student: this._id }, next);
// });

const Student = mongoose.model('Student', studentSchema);

export default Student;
