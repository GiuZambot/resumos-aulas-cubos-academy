const { contas } = require('../dados/bancodedados');
const { isNotUnicEmailCpf } = require('./tools');

const criarConta = (req, res) => {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;
    if (!(nome && cpf && data_nascimento && telefone && email && senha)) {
        res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
        return;
    }

    // Verifica email e CPF únicos
    if (isNotUnicEmailCpf(cpf, email)) {
        res.status(400).json({ mensagem: 'E-mail ou CPF já existe em outra conta' });
        return;
    }

    const novaConta = {
        numero: `${++idUnicoContas}`,
        saldo: 0,
        usuario: { nome, cpf, data_nascimento, telefone, email, senha }
    };
    contas.push(novaConta);
    res.status(201).json(novaConta);
}

module.exports = { criarConta };