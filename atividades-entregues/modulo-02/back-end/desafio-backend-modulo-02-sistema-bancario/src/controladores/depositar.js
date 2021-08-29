const { contas, depositos } = require('../dados/bancodedados');
const { data } = require('./tools');


const depositar = (req, res) => {
    // Chegar envio de dados
    let { numero_conta, valor } = req.body;
    if (!(numero_conta && valor)) {
        res.status(400).json({ mensagem: 'Número da conta e valor são necessários' });
        return;
    }

    // Converter string valor para número
    valor = +valor;
    // Verificar valor do depósito, proibido zero ou negativo
    if (isNaN(valor) || valor <= 0) {
        res.status(400).json({ mensagem: 'Valor do depósito precisa ser um número e ser maior que zero, em centavos.' });
        return;
    }

    // Verificar existência da conta
    const cliente = contas.findIndex(n => n.numero === req.body.numero_conta);
    if (cliente === -1) {
        res.status(400).json({ mensagem: 'Conta não encontrada! Depósito não realizado.' });
        return;
    }

    //Tudo certo, depositar e fazer registro
    contas[cliente].saldo += valor;
    depositos.push({ data: data(), numero_conta, valor });
    res.status(200).json({ mensagem: "Depósito realizado com sucesso!" });
}

module.exports = { depositar };