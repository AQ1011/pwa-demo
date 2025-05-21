// server.js
const express = require('express');
const app = express();

app.get('/dashboard', (req, res) => {
  res.json({ message: 'Hello from API!', timestamp: Date.now() });
});

app.listen(3000, () => console.log('API server running on http://localhost:3000'));
