const conexao = require('../../conexao');

const atualizarProdutos = async (req, res) => {
    const { nome, quantidade, categoria, preco, descricao, imagem } = req.body;
    const { id: idProduto } = req.params;
    const { id: userId } = req.usuario;

    if (!nome)
        return res.status(400).json({ mensagem: "A propriedade nome é obrigatória." });
    if (!quantidade)
        return res.status(400).json({ mensagem: "A propriedade quantidade é obrigatória." });
    if (!categoria)
        return res.status(400).json({ mensagem: "A propriedade categoria da loja é obrigatória." });
    if (!preco || +preco < 1)
        return res.status(400).json({ mensagem: "A propriedade preco é obrigatória e maior que 0." });
    if (!descricao)
        return res.status(400).json({ mensagem: "A propriedade descrição é obrigatória." });
    if (!imagem)
        return res.status(400).json({ mensagem: "A propriedade imagem é obrigatória." });

    try {
        const { rows: produto } = await conexao.query('SELECT * FROM produtos WHERE id = $1', [idProduto]);

        if (produto.length === 0)
            return res.status(500).json({ mensagem: "Esse produto não foi encontrado." });
        if (userId != produto[0].usuario_id)
            return res.status(403).json({ mensagem: "Esse produto pertence a outro usuário..." });

        await conexao.query(
            'UPDATE produtos SET nome = $1, quantidade = $2, categoria = $3, preco = $4, descricao = $5, imagem = $6  WHERE id = $7;',
            [nome, quantidade, categoria, preco, descricao, imagem, idProduto]);

        return res.status(201).send();
    }
    catch (error) {
        return res.status(500).json({ mensagem: "Ocorreu um erro inesperado. - " + error.message });
    }
};

module.exports = atualizarProdutos;