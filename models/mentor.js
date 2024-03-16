//  const mongoose = require('mongoose');

// const mentorSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   expertise: {
//     type: String,
//     required: true,
//   },
//   students: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Student',
//   }],
// });

// const Mentor = mongoose.model('Mentor', mentorSchema);

// module.exports = Mentor;
const mongoose = require('mongoose');
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
      ref: 'Student',
    }],
    maxStudents: {
      type: Number,
      required: true,
      default: 5, // Example maximum number of students
    },
  });
  

const Mentor = mongoose.model('Mentor', mentorSchema);

module.exports = Mentor;