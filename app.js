'use strict';
const express = require('express');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 5000;

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/disqus.html')
});

app.listen(port, function () {
  console.log('Started.')
});
