const knex = require('../conexao');
const bcrypt = require('bcrypt');

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha, nome_loja } = req.body;

    if (!nome) {
        return res.status(404).json("O campo nome é obrigatório...");
    }

    if (!email) {
        return res.status(404).json("O campo email é obrigatório...");
    }

    if (!senha) {
        return res.status(404).json("O campo senha é obrigatório...");
    }

    if (!nome_loja) {
        return res.status(404).json("O campo nome_loja é obrigatório...");
    }

    try {
        const quantidadeUsuarios = await knex('usuarios').where({ email }).first();

        if (quantidadeUsuarios) {
            return res.status(400).json("O email já existe...");
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const usuario = await knex('usuarios').insert({
            nome,
            email,
            senha: senhaCriptografada,
            nome_loja
        }).returning('*');

        if (!usuario) {
            return res.status(400).json("O usuário não foi cadastrado...");
        }

        return res.status(200).json(usuario[0]);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const obterPerfil = async (req, res) => {
    return res.status(200).json(req.usuario);
}

const atualizarPerfil = async (req, res) => {
    let { nome, email, senha, nome_loja } = req.body;
    const { id } = req.usuario;

    if (!nome && !email && !senha && !nome_loja) {
        return res.status(404).json('É obrigatório informar ao menos um campo para atualização...');
    }

    try {
        const usuarioExiste = await knex('usuarios').where({ id }).first();

        if (!usuarioExiste) {
            return res.status(404).json('Usuario não encontrado...');
        }

        if (senha) {
            senha = await bcrypt.hash(senha, 10);
        }

        if (email !== req.usuario.email) {
            const emailUsuarioExiste = await knex('usuarios').where({ email }).first();

            if (emailUsuarioExiste) {
                return res.status(404).json('O Email já existe...');
            }
        }

        const usuarioAtualizado = await knex('usuarios')
            .where({ id })
            .update({
                nome,
                email,
                senha,
                nome_loja
            });

        if (!usuarioAtualizado) {
            return res.status(400).json("O usuario não foi atualizado");
        }

        return res.status(200).json('Usuario foi atualizado com sucesso.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    cadastrarUsuario,
    obterPerfil,
    atualizarPerfil
}