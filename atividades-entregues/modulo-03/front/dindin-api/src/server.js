const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("src/build"));
app.use(routes);

module.exports = app;

