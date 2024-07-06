const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/users', async (req, res) => {
  try {
    const response = await axios.get('https://reqres.in/api/users?page=2');
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data from the API');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
