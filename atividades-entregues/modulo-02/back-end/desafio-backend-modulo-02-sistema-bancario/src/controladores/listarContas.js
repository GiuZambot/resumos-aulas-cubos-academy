const { contas } = require('../dados/bancodedados');

const listarContas = (req, res) => res.status(200).json(contas);

module.exports = { listarContas };