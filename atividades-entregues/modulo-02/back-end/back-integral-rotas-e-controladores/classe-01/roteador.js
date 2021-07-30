const express = require('express');
const {get, getPorId} = require('./controladores/imoveis');
const router = express();

router.get('/imoveis', get);
router.get('/imoveis/:id', getPorId);

module.exports = {router};