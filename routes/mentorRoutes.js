const express = require('express');
const Mentor = require('../models/mentor');
const Student = require('../models/student');

const router = express.Router();

// Add your APIs here
router.get('/', async (req, res) => {
 
    res.send("<div style=background-color:#EED9C4;padding:20px;><h2 style=text-align:center;color:red>Mentor👩🏻‍💻 and Student👩🏻‍🎓 Assigning with Database🛢️</h2><p>This project is a simple API for managing mentors and students. It allows you to create, retrieve, update mentors and students from a MongoDB database🛢️.</p><ol><li><b>🖊️Create Mentor/Student:</b><br> You can create a new mentor or student by sending a POST request to the /mentors or /students endpoints, respectively. The request body should contain the necessary data for the new mentor or student.</li><br><li><b>🔃Assign Students to Mentor:</b><br> To assign students to a mentor, send a PUT request to the /mentors/:mentorId/students endpoint, where :mentorId is the ID of the mentor you want to assign students to. Include an array of student IDs in the request body to assign multiple students to the mentor.</li><br><li><b>🔃Assign Mentor for Particular Student:</b><br> To assign a mentor to a particular student, send a PUT request to the /students/:studentId/mentor/:mentorId endpoint, where :studentId is the ID of the student and :mentorId is the ID of the mentor you want to assign to the student.</li><br><li><b>📖Retrieve Students by Mentor:</b> You can retrieve all students assigned to a specific mentor by sending a GET request to the /mentors/:mentorId/students endpoint.</li><br><li><b>📖Retrieve Previous Mentor of Student:</b> To retrieve the previous mentor of a student, send a GET request to the /students/:studentId/previous-mentor endpoint, where :studentId is the ID of the student.</li><br><li><b>📖Retrieve All Students/Mentors:</b><br> You can retrieve all students or mentors by sending a GET request to the /students or /mentors endpoints, respectively.</li></ol><p>The API uses Mongoose to interact with the MongoDB database and Express.js to handle the HTTP requests. It follows RESTful principles and provides JSON responses for easy consumption by client applications.</p><div>");
  
});
router.post('/mentors', async (req, res) => {
    try {
      const mentor = new Mentor(req.body);
      await mentor.save();
      res.status(201).send(mentor);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  });
  router.post('/students', async (req, res) => {
    try {
      const student = new Student(req.body);
      await student.save();
      res.status(201).send(student);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  });

router.put('/mentors/:mentorId/students', async (req, res) => {
    try {
      const { mentorId } = req.params;
      const { studentIds } = req.body;
  
      const mentor = await Mentor.findById(mentorId);
      if (!mentor) {
        return res.status(404).send({ message: 'Mentor not found' });
      }
  
      // Check if mentor has reached maximum capacity
      if (mentor.students.length + studentIds.length > mentor.maxStudents) {
        return res.status(400).send({ message: 'Mentor has reached maximum capacity' });
      }
  
      // Assign students to mentor
      mentor.students.push(...studentIds);
      await mentor.save();
  
      res.status(200).send({ message: 'Students assigned to mentor successfully' });
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  });
  


router.put('/students/:studentId/mentor/:mentorId', async (req, res) => {
    try {
      const { studentId, mentorId } = req.params;
      const student = await Student.findById(studentId);
      const mentor = await Mentor.findById(mentorId);
      if (!student || !mentor) {
        return res.status(404).send({ message: 'Student or mentor not found' });
      }
  
      if (student.mentor) {
        const prevMentor = await Mentor.findById(student.mentor);
        prevMentor.students.pull(student);
        await prevMentor.save();
      }
  
      mentor.students.push(student);
      student.mentor = mentor;
      await mentor.save();
      await student.save();
  
      res.status(200).send({ message: 'Mentor assigned to student successfully' });
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  });

  router.get('/mentors/:mentorId/students', async (req, res) => {
    try {
      const { mentorId } = req.params;
      const mentor = await Mentor.findById(mentorId).populate('students');
      if (!mentor) {
        return res.status(404).send({ message: 'Mentor not found' });
      }
      const responseData = {
        mentorName: mentor.name,
        students: mentor.students,
      };

      res.status(200).send(responseData);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  });
  
        
router.get('/students/:studentId/previous-mentor', async (req, res) => {
    try {
      const { studentId } = req.params;
      const student = await Student.findById(studentId).populate('mentor');
      if (!student) {
        return res.status(404).send({ message: 'Student not found' });
      }
      res.status(200).send(student.mentor);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  });
  router.get('/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).send(students);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
});
router.get('/mentors', async (req, res) => {
  try {
      const mentors = await Mentor.find();
      res.status(200).send(mentors);
  } catch (err) {
      res.status(400).send({ message: err.message });
  }
});


module.exports = router;
