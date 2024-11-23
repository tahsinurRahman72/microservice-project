// src/server.js
const express = require('express');

const app = express();
const PORT = 5000;

// Example route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend is running on port ${PORT}`);
});