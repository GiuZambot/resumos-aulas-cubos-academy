const conexao = require('../../conexao');

const detalharProduto = async (req, res) => {
    try {
        const { id: userId } = req.usuario;
        const { id: idProduto } = req.params;
        const { rows: produto } = await conexao.query('SELECT * FROM produtos WHERE id = $1', [idProduto]);

        if (produto.length === 0)
            return res.status(500).json({ mensagem: "Esse produto não foi encontrado." });

        if (userId != produto[0].usuario_id)
            return res.status(500).json({ mensagem: "Esse produto pertence a outro usuário." });

        res.json(produto);
    } catch (error) {
        return res.status(500).json({ mensagem: "Ocorreu um erro inesperado. - " + error.message });
    }
};

module.exports = detalharProduto;