const conexao = require('../../conexao');

const deletarProduto = async (req, res) => {
    const { id: idProduto } = req.params;
    const { id: userId } = req.usuario;
    try {
        const { rows: produto } = await conexao.query('SELECT * FROM produtos WHERE id = $1', [idProduto]);

        if (produto.length === 0)
            return res.status(400).json({ mensagem: "Produto não encontrado." });
        if (userId != produto[0].usuario_id)
            return res.status(403).json({ mensagem: "Esse produto pertence a outro usuário..." });

        await conexao.query('DELETE FROM produtos WHERE id = $1;', [idProduto]);

        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ mensagem: "Ocorreu um erro inesperado. - " + error.message });
    }

};

module.exports = deletarProduto;