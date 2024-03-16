require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mentorRoutes = require('./routes/mentorRoutes.js');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connect(process.env.MONGODB_URI);


app.use(bodyParser.json());
app.use(mentorRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
