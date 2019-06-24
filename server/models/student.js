const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
});

var Student = mongoose.model('Student', studentSchema);

module.exports = Student;
