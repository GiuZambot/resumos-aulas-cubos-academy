const { contas, depositos, saques, transferencias } = require('../dados/bancodedados');
const { getCliente } = require('./tools');

const extrato = (req, res) => {
    // Existência e senha já validados em controlePermissoes.js

    const cliente = contas[getCliente(req.query.numero_conta)].numero;
    const transferenciasEnviadas =
        transferencias.filter(n => n.numero_conta === cliente);
    const transferenciasRecebidas =
        transferencias.filter(n => n.numero_conta_destino === cliente);
    const extratoRel = {
        depositos,
        saques,
        transferenciasEnviadas,
        transferenciasRecebidas
    }
    res.status(200).json(extratoRel);
}

module.exports = { extrato };