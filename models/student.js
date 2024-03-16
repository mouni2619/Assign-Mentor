const mongoose = require('mongoose');
// Define the Student schema
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mentor',
  },
  previousMentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mentor',
  },
});
// Create the Student model based on the schema
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
