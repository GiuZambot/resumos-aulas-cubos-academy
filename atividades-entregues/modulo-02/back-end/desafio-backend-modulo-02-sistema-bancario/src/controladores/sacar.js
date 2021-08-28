const { contas, saques } = require('../dados/bancodedados');
const { data } = require('./tools');

const sacar = (req, res) => {
    // Chegar envio de dados
    let { numero_conta, valor } = req.body;
    if (!(numero_conta && valor)) {
        res.status(400).json({ mensagem: 'Número da conta, valor e senha são obrigatórios.' });
        return;
    }

    // Converter string valor para número
    valor = +valor;
    // Verificar valor do depósito, proibido zero ou negativo
    if (isNaN(valor) || valor <= 0) {
        res.status(400).json({ mensagem: 'Valor do saque precisa ser um número e ser maior que zero, em centavos.' });
        return;
    }

    // Senha já verificada em controledepermissoes.js

    // Verificar existência da conta
    const cliente = contas.findIndex(n => n.numero === req.body.numero_conta);
    if (cliente === -1) {
        res.status(404).json({ mensagem: 'Conta não encontrada! Saque não realizado.' });
        return;
    }

    // Verificar saldo suficiente
    if (contas[cliente].saldo < valor) {
        res.status(404).json({ mensagem: 'Saldo insuficiente para o saque com valor informado.' });
        return;
    }

    //Tudo certo, sacar e fazer registro
    contas[cliente].saldo -= valor;
    saques.push({ data: data(), numero_conta, valor });
    res.status(200).json({ mensagem: "Saque realizado com sucesso!" });
}

module.exports = { sacar };