const { contas } = require('../dados/bancodedados');

const excluirConta = (req, res) => {
    // Conta não encontrada
    const cliente = contas.findIndex(n => n.numero === req.params.numeroConta);
    if (cliente === -1) {
        res.status(404).json({ mensagem: 'Conta não encontrada! Nada excluído.' });
        return;
    }

    //Conta ainda possui saldo, não excluir
    if (contas[cliente].saldo > 0) {
        res.status(404).json({ mensagem: 'Essa conta ainda possui saldo! Nada excluído.' });
        return;
    }

    // Excluir conta
    contas.splice(cliente, 1);
    res.status(200).json({ mensagem: "Conta excluida com sucesso!" });
}

module.exports = { excluirConta };