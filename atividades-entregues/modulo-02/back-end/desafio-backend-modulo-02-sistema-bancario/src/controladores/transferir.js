const { contas, transferencias } = require('../dados/bancodedados');
const { data, getCliente } = require('./tools');

const transferir = (req, res) => {
    // Chegar envio de dados
    let { numero_conta, numero_conta_destino, valor } = req.body;
    if (!(numero_conta && valor && numero_conta_destino)) {
        res.status(400).json({ mensagem: 'Número da conta, destinatário e valor são obrigatórios.' });
        return;
    }

    // Verificar existência da conta
    const cliente = getCliente(req.body.numero_conta);
    if (cliente === -1) {
        res.status(404).json({ mensagem: 'Conta não encontrada! Saque não realizado.' });
        return;
    }

    // Senha já verificada em controledepermissoes.js

    // Verificar existência da conta de destino
    const clienteDestino = contas.findIndex(n => n.numero === req.body.numero_conta_destino);
    if (clienteDestino === -1) {
        res.status(404).json({ mensagem: 'Conta do destinatário não encontrada! Transferência não realizadao.' });
        return;
    }

    // Converter string valor para número
    valor = +valor;

    // Verificar valor, proibido zero ou negativo
    if (isNaN(valor) || valor <= 0) {
        res.status(400).json({ mensagem: 'Valor do saque precisa ser um número e ser maior que zero, em centavos.' });
        return;
    }

    // Verificar saldo suficiente
    if (contas[cliente].saldo < valor) {
        res.status(404).json({ mensagem: 'Saldo insuficiente para a transferÊncia com valor informado.' });
        return;
    }

    //Tudo certo, sacar e fazer registro
    contas[cliente].saldo -= valor;
    contas[clienteDestino].saldo += valor;
    transferencias.push({ data: data(), numero_conta, numero_conta_destino, valor });
    res.status(200).json({ mensagem: "Transferência realizado com sucesso!" });
}

module.exports = { transferir };