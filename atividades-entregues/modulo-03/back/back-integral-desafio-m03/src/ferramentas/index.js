const conexao = require('../conexao');

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

const getUsuarioByEmail = async (email) => {
    const { rowCount, rows } =
        await conexao.query('SELECT * FROM usuarios WHERE email = $1', [email]);
    const userEncontrado = rowCount > 0;
    return { userEncontrado, usuario: rows[0] };
}

const getUsuarioById = async (id) => {
    const { rowCount, rows } =
        await conexao.query('SELECT * FROM usuarios WHERE id = $1', [id]);
    const userEncontrado = rowCount > 0;
    const { senha, ...usuario } = rows[0];
    return { userEncontrado, usuario };
}

const isNotUnicEmail = async (email) => {
    const { rowCount } =
        await conexao.query('SELECT email FROM usuarios WHERE email = $1', [email]);
    return rowCount > 0;
}

module.exports = { data, getUsuarioByEmail, getUsuarioById, isNotUnicEmail };