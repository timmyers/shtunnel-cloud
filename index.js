const express = require('express');

const PORT = 8080;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Tim\'s World!');
});

app.listen(PORT, () => {
  console.log('Example app listening on port 3000!');
});
