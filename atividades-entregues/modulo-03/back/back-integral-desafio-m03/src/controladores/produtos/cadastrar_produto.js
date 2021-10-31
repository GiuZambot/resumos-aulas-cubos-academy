const conexao = require('../../conexao');

const cadastrarProdutos = async (req, res) => {
    const { nome, quantidade, categoria, preco, descricao, imagem } = req.body;
    const { id: userId } = req.usuario;

    if (!nome)
        return res.status(400).json({ mensagem: "A propriedade nome é obrigatória." });
    if (!quantidade)
        return res.status(400).json({ mensagem: "A propriedade quantidade é obrigatória." });
    if (!categoria)
        return res.status(400).json({ mensagem: "A propriedade categoria da loja é obrigatória." });
    if (!preco && +preco < 1)
        return res.status(400).json({ mensagem: "A propriedade preco é obrigatória." });
    if (!descricao)
        return res.status(400).json({ mensagem: "A propriedade descrição é obrigatória." });
    if (!imagem)
        return res.status(400).json({ mensagem: "A propriedade imagem é obrigatória." });

    try {
        await conexao.query(
            'insert into produtos (usuario_id, nome, quantidade, categoria, preco, descricao, imagem) values ($1, $2, $3, $4, $5, $6, $7)',
            [userId, nome, quantidade, categoria, preco, descricao, imagem]);

        return res.status(201).send();
    }
    catch (error) {
        return res.status(500).json({ mensagem: "Ocorreu um erro inesperado. - " + error.message });
    }
};

module.exports = cadastrarProdutos;