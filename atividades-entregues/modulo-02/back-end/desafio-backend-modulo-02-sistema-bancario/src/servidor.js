const express = require('express');
const swaggerUi = require('swagger-ui-express');
const roteador = require('./roteador');
const { controlePermissoes } = require('./intermediarios/controlepermissoes');
let = idUnicoContas = 0;

const app = express();

app.use(express.json());
app.use(controlePermissoes);
app.use(roteador);

app.use("", swaggerUi.serve, swaggerUi.setup(require("./swagger.json")));

module.exports = app;