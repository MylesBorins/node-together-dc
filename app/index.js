const express = require('express');
const app = express();

app.get('/', function(request, response) {
  response.send('hey I like your shoes');
});

module.exports = app;
