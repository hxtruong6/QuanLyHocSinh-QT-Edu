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
  schoolYear: String,
});

// studentSchema.pre('remove', function(next) {
//   this.model('Student').deleteMany({ student: this._id }, next);
// });

const Student = mongoose.model('students', studentSchema);

export default Student;
