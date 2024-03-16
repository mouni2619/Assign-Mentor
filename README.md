## Mentor-Student Management API
This project is a simple API for managing mentors and students. It allows you to create, retrieve, update mentors and students from a MongoDB database.

# Features
📖GET /:

Here I provided the URL to get the basic information about the API

🔗https://assign-mentor-2jsx.onrender.com

🖊️Create Mentor/Student:

You can create a new mentor or student by sending a POST request to the /mentors or /students endpoints, respectively. The request body should contain the necessary data for the new mentor or student.

🔃Assign Students to Mentor:

To assign students to a mentor, send a PUT request to the /mentors/:mentorId/students endpoint, where :mentorId is the ID of the mentor you want to assign students to. Include an array of student IDs in the request body to assign multiple students to the mentor.

🔃Assign Mentor for Particular Student:

To assign a mentor to a particular student, send a PUT request to the /students/:studentId/mentor/:mentorId endpoint, where :studentId is the ID of the student and :mentorId is the ID of the mentor you want to assign to the student.

📖Retrieve Students by Mentor:

You can retrieve all students assigned to a specific mentor by sending a GET request to the /mentors/:mentorId/students endpoint.
Retrieve Previous Mentor of Student: To retrieve the previous mentor of a student, send a GET request to the /students/:studentId/previous-mentor endpoint, where :studentId is the ID of the student.

📖Retrieve All Students/Mentors:

You can retrieve all students or mentors by sending a GET request to the /students or /mentors endpoints, respectively.

# Technologies Used
Node.js
Express.js
MongoDB
Mongoose
# Getting Started
Clone the repository: git clone <repository-url>
Install dependencies: npm install
Set up environment variables by creating a .env file in the root directory with the following content:
makefile
Copy code
PORT=3000
MONGODB_URI=<your-mongodb-uri>
Start the server: npm start
Use Postman or any API testing tool to interact with the API.

# API Endpoints
POST /mentors: Create a new mentor
POST /students: Create a new student
PUT /mentors/:mentorId/students: Assign students to a mentor
PUT /students/:studentId/mentor/:mentorId: Assign a mentor to a student
GET /mentors/:mentorId/students: Get all students assigned to a mentor
GET /students/:studentId/previous-mentor: Get the previous mentor of a student
GET /students: Get all students
GET /mentors: Get all mentors






