const express = require('express');
const router = express();

const { listarContas } = require('./controladores/listarContas');
const { criarConta } = require('./controladores/criarConta');
const { atualizarUsuarioConta } = require('./controladores/atualizarConta');
const { excluirConta } = require('./controladores/excluirConta');
const { depositar } = require('./controladores/depositar');
const { sacar } = require('./controladores/sacar'); //ok
const { transferir } = require('./controladores/transferir');
const { saldo } = require('./controladores/consultarSaldo');
const { extrato } = require('./controladores/extrato');

router.get('/contas', listarContas);
router.post('/contas', criarConta);
router.put('/contas/:numeroConta/usuario', atualizarUsuarioConta);
router.delete('/contas/:numeroConta', excluirConta);
router.post('/transacoes/depositar', depositar);
router.post('/transacoes/sacar', sacar);
router.post('/transacoes/transferir', transferir);
router.get('/contas/saldo', saldo);
router.get('/contas/extrato', extrato);

module.exports = router;