const { contas } = require('../dados/bancodedados');

const data = () => {
    const dataAtual = new Date();
    const dia = dataAtual.getDate();
    const mes = (dataAtual.getMonth() + 1);
    const ano = dataAtual.getFullYear();
    const horas = dataAtual.getHours();
    const min = dataAtual.getMinutes();
    const sec = dataAtual.getSeconds();
    return `${ano}-${mes}-${dia} ${horas}:${min}:${sec}`;
}

const getCliente = (numero_conta) => {
    return contas.findIndex(n => n.numero === numero_conta);
}

const isNotUnicEmailCpf = (cpf, email, cliente) => {
    contasOutros = [...contas];
    if (cliente) {
        contasOutros.splice(cliente, 1);
    }
    cpf = contasOutros.findIndex(n => n.usuario.cpf === cpf);
    email = contasOutros.findIndex(n => n.usuario.email === email);
    return !(email < 0 && cpf < 0);
}

module.exports = { data, getCliente, isNotUnicEmailCpf };