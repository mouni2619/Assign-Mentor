// Load environment variables from .env file
require('dotenv').config();

// Import required packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Import routes
const mentorRoutes = require('./routes/mentorRoutes.js');

// Create an Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connect(process.env.MONGODB_URI);

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Use mentorRoutes for handling mentor-related routes
app.use(mentorRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
