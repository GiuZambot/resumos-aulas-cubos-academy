const express = require('express');
const router = require('./router');
const {validaSenha, validaDados} = require('./middleware');
const app = express();
const port = 80;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("front"));
app.use(validaSenha);
app.use(validaDados);
app.use(router);
app.listen(port);