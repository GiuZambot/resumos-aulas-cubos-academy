const conexao = require('../../conexao');

const listarProdutos = async (req, res) => {
    const categoria = req.query.categoria || '';
    try {
        const { rows: produtos } = await conexao.query('SELECT * FROM produtos WHERE categoria ILIKE  $1', [`%${categoria}%`]);
        if (produtos.length === 0)
            return res.status(500).json({ mensagem: "Nenhum produto foi encontrado." });

        return res.json(produtos);
    } catch (error) {
        return res.status(500).json({ mensagem: "Ocorreu um erro inesperado. - " + error.message });
    }
};

module.exports = listarProdutos;