const { contas } = require('../dados/bancodedados');
const { getCliente } = require('./tools');

const saldo = (req, res) => {
    // Número, senha e existência da conta em controlePermissoes.js

    // Tudo ok, enviar saldo
    const { numero_conta } = req.query;
    const cliente = getCliente(numero_conta);
    res.status(200).json({ saldo: contas[cliente].saldo });
}

module.exports = { saldo };