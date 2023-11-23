const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello node API');
});

app.listen(3000, () => {
  console.log('hiiii');
});
