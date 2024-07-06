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

app.get('/users', async (req, res) => {
  try {
    const response = await axios.get('https://reqres.in/api/users?page=2');
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data from the API');
  }
});

app.get('/user/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const response = await axios.get(`https://reqres.in/api/users/${userId}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data from the API');
  }
});

app.post('/users', async (req, res) => {
  const userData = req.body;
  try {
    const response = await axios.post('https://reqres.in/api/users', userData);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error creating user');
  }
});

// Serve index.html at the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve index1.html at /index1 URL
app.get('/index1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index1.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
