const conexao = require('../../conexao');
const { isNotUnicEmail } = require('../../ferramentas');
const bcrypt = require('bcrypt');

const atualizarUsuario = async (req, res) => {
    const { nome, email, nome_loja, senha } = req.body;
    const { id } = req.usuario;

    if (!email)
        return res.status(400).json({ mensagem: "A propriedade email é obrigatória." });
    try {
        if (await isNotUnicEmail(email))
            return res.status(400).json({ mensagem: "Já existe usuário cadastrado com o e-mail informado." });

    } catch (error) {
        return res.status(500).json({ mensagem: `Ocorreu um erro inesperado. - ${error.message}` });
    }

    if (!nome)
        return res.status(400).json({ mensagem: "A propriedade nome é obrigatória." });
    if (!nome_loja)
        return res.status(400).json({ mensagem: "A propriedade nome da loja é obrigatória." });
    if (!senha)
        return res.status(400).json({ mensagem: "A propriedade senha é obrigatória." });

    try {
        const senhaCriptografada = await bcrypt.hash(senha, 10);

        await conexao.query(
            'UPDATE usuarios SET nome = $1, email = $2, nome_loja=$3, senha=$4 WHERE id = $5;',
            [nome, email, nome_loja, senhaCriptografada, id]);

        return res.status(201).send();
    }
    catch (error) {
        return res.status(500).json({ mensagem: "Ocorreu um erro inesperado. - " + error.message });
    }
};

module.exports = atualizarUsuario;