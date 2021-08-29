const { contas } = require('../dados/bancodedados');

const excluirConta = (req, res) => {
    //Conta ainda possui saldo, não excluir
    if (contas[cliente].saldo > 0) {
        res.status(400).json({ mensagem: 'Essa conta ainda possui saldo! Nada excluído.' });
        return;
    }

    // Excluir conta
    contas.splice(cliente, 1);
    res.status(200).json({ mensagem: "Conta excluida com sucesso!" });
}

module.exports = { excluirConta };