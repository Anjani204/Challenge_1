const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Set up body-parser middleware to parse incoming request bodies
app.use(bodyParser.json());

// Connect to MongoDB database
mongoose.connect('mongodb://localhost/27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

// Set up routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});