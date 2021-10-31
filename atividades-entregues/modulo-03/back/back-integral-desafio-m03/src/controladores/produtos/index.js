const cadastrarProduto = require('./cadastrar_produto');
const listarProdutos = require('./listar_produtos');
const detalharProduto = require('./detalhar_produto');
const atualizarProduto = require('./atualizar_produto');
const deletarProduto = require('./deletar_produto');

module.exports = {
    cadastrarProduto,
    listarProdutos,
    detalharProduto,
    atualizarProduto,
    deletarProduto
};