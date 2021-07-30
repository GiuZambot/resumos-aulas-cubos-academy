const express = require('express');
const {router} = require('./roteador')
const app = express();
const port = 8000;

app.use(router);

app.listen(port);