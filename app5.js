const express = require('express');
const axios = require('axios');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON bodies
app.use(bodyParser.json());

app.post('/users', async (req, res) => {
  const userData = req.body;
  try {
    const response = await axios.post('https://reqres.in/api/users', userData);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error creating user');
  }
});

// Serve createUser.html at /createUser URL
app.get('/createUser', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'createUser.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
