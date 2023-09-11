const express = require('express');

const PORT = 8080;
const HOST = 'localhost';

const app = express();
app.get('/', (req, res) => {
  res.json({
    name: 'Hello from github',
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

module.exports = app;
