const express = require('express');
const rotas = express();
const validaToken = require('./intermediarios/autenticar');

const {
    cadastrarUsuario,
    logarUsuario,
    detalharUsuario,
    atualizarUsuario,
} = require('./controladores/usuarios');

const {
    cadastrarProduto,
    listarProdutos,
    detalharProduto,
    atualizarProduto,
    deletarProduto
} = require('./controladores/produtos');

rotas.post('/usuario', cadastrarUsuario);
rotas.post('/login', logarUsuario);

rotas.use(validaToken);

rotas.get('/usuario', detalharUsuario);
rotas.put('/usuario', atualizarUsuario);

rotas.post('/produtos', cadastrarProduto);
rotas.get('/produtos', listarProdutos);
rotas.get('/produtos/:id', detalharProduto);
rotas.put('/produtos/:id', atualizarProduto);
rotas.delete('/produtos/:id', deletarProduto);

module.exports = rotas;