# Mentor👩🏻‍💻 and Student👩🏻‍🎓 Assigning with Database🛢️
This project is a simple API for managing mentors and students. It allows you to create, retrieve, update mentors and students from a MongoDB database.
## Postman Doc Link
https://documenter.getpostman.com/view/33522302/2sA2xnwpYo
## Features
🖊️Create Basic Info About API /:

🔗https://assign-mentor-2jsx.onrender.com

🖊️Create Mentor/Student:

You can create a new mentor or student by sending a POST request to the /mentors or /students endpoints, respectively. The request body should contain the necessary data for the new mentor or student.

🔃Assign Students to Mentor:

To assign students to a mentor, send a PUT request to the /mentors/:mentorId/students endpoint, where :mentorId is the ID of the mentor you want to assign students to. Include an array of student IDs in the request body to assign multiple students to the mentor.

🔃Assign Mentor for Particular Student:

To assign a mentor to a particular student, send a PUT request to the /students/:studentId/mentor/:mentorId endpoint, where :studentId is the ID of the student and :mentorId is the ID of the mentor you want to assign to the student.

📖Retrieve All Students Data for Particular Mentor:

You can retrieve all students assigned to a specific mentor by sending a GET request to the /mentors/:mentorId/students endpoint.

🔗https://assign-mentor-2jsx.onrender.com/mentors/65f48262cec74c0f54808015/students

🔗https://assign-mentor-2jsx.onrender.com/mentors/65f48245cec74c0f54808013/students

🔗https://assign-mentor-2jsx.onrender.com/mentors/65f48277cec74c0f54808017/students

📖Retrieve Previous Mentor of Student:

To retrieve the previous mentor of a student, send a GET request to the /students/:studentId/previous-mentor endpoint, where :studentId is the ID of the student.

🔗https://assign-mentor-2jsx.onrender.com/students/65f481f1cec74c0f5480800b/previous-mentor

🔗https://assign-mentor-2jsx.onrender.com/students/65f48216cec74c0f5480800d/previous-mentor

🔗https://assign-mentor-2jsx.onrender.com/students/65f48223cec74c0f5480800f/previous-mentor

🔗https://assign-mentor-2jsx.onrender.com/students/65f4822ccec74c0f54808011/previous-mentor

📖Retrieve All Students/Mentors:

You can retrieve all students or mentors by sending a GET request to the /students or /mentors endpoints, respectively.

🔗https://assign-mentor-2jsx.onrender.com/mentors

🔗https://assign-mentor-2jsx.onrender.com/students
## Technologies Used
Node.js, 
Express.js, 
MongoDB, 
Mongoose.
## Getting Started
Clone the repository: git clone <repository-url>

Install dependencies: npm install

Set up environment variables by creating a .env file in the root directory with the following content:

makefile

PORT=your-port

MONGODB_URI=your-mongodb-uri

Start the server: npm start

Use Postman or any API testing tool to interact with the API.
## API Endpoints
POST /mentors: Create a new mentor

POST /students: Create a new student

PUT /mentors/:mentorId/students: Assign students to a mentor

PUT /students/:studentId/mentor/:mentorId: Assign Mentor for Particular Student

GET /mentors/:mentorId/students: Get all students assigned to a mentor

GET /students/:studentId/previous-mentor: Get the previous mentor of a student

GET /students: Get all students

GET /mentors: Get all mentors






