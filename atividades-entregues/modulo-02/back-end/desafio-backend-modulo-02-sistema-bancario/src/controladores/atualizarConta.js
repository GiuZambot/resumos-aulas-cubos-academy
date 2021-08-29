const { contas } = require('../dados/bancodedados');
const { isNotUnicEmailCpf } = require('./tools');

const atualizarUsuarioConta = (req, res) => {
    // Pelo menos um campo é necessário
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;
    if (!(nome || cpf || data_nascimento || telefone || email || senha)) {
        res.status(400).json({ mensagem: 'É necessário, pelo menos, um campo para a atualização dos dados cadastrais' });
        return;
    }

    // Conta não encontrada
    const cliente = contas.findIndex(n => n.numero === req.params.numeroConta);
    if (cliente === -1) {
        res.status(400).json({ mensagem: 'Conta não encontrada! Nada atualizado.' });
        return;
    }

    // Verifica email e CPF únicos
    if (isNotUnicEmailCpf(cpf, email, cliente)) {
        res.status(400).json({ mensagem: 'E-mail ou CPF já existe em outra conta' });
        return;
    }

    // Tudo certo: Atualizar conta
    for (let i in req.body) {
        if (i === "numero") continue;
        if (i === "saldo") continue;
        if (!contas[cliente].usuario[i]) continue;
        contas[cliente].usuario[i] = req.body[i];
    }
    res.status(200).json({ mensagem: "Conta atualizada com sucesso!" });
}

module.exports = { atualizarUsuarioConta };