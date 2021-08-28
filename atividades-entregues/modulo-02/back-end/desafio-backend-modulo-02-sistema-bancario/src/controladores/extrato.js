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

const teste = {
    depositos: [
        {
            data: "2021-08-18 20:46:03",
            numero_conta: "1",
            valor: 10000
        },
        {
            data: "2021-08-18 20:46:06",
            numero_conta: "1",
            valor: 10000
        }
    ],
    saques: [
        {
            data: "2021-08-18 20:46:18",
            numero_conta: "1",
            valor: 1000
        }
    ],
    transferenciasEnviadas: [
        {
            data: "2021-08-18 20:47:10",
            numero_conta_origem: "1",
            numero_conta_destino: "2",
            valor: 5000
        }
    ],
    transferenciasRecebidas: [
        {
            data: "2021-08-18 20:47:24",
            numero_conta_origem: "2",
            numero_conta_destino: "1",
            valor: 2000
        },
        {
            data: "2021-08-18 20:47:26",
            numero_conta_origem: "2",
            numero_conta_destino: "1",
            valor: 2000
        }
    ]
}