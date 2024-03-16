const mongoose = require('mongoose');
// Define the Mentor schema
const mentorSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    expertise: {
      type: String,
      required: true,
    },
    students: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',// Reference to the Student model
    }],
    maxStudents: {
      type: Number,
      required: true,
      default: 5, // Example maximum number of students
    },
  });
  
// Create the Mentor model based on the schema
const Mentor = mongoose.model('Mentor', mentorSchema);

module.exports = Mentor;