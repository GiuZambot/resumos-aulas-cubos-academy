const conexao = require('../../conexao');
const { isNotUnicEmail } = require('../../ferramentas');
const bcrypt = require('bcrypt');

const cadastrarUsuario = async (req, res) => {
    const { nome, email, nome_loja, senha } = req.body;

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
            'insert into usuarios (nome, email, nome_loja, senha) values ($1, $2, $3, $4)',
            [nome, email, nome_loja, senhaCriptografada]);

        return res.status(201).send();
    }
    catch (error) {
        return res.status(500).json({ mensagem: "Ocorreu um erro inesperado. - " + error.message });
    }
};

module.exports = cadastrarUsuario;