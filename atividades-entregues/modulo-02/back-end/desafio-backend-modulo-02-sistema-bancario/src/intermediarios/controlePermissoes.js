const { contas } = require('../dados/bancodedados');
const { getCliente } = require('../controladores/tools');

function controlePermissoes(req, res, next) {
    //console.log(req._parsedUrl.pathname);
    const conta = req.query.numero_conta || req.body.numero_conta;
    const senha = req.query.senha || req.body.senha;
    switch (req._parsedUrl.pathname) {
        case "/contas":
            if (req.method === "GET" && req.query.senha_banco !== "Cubos123Bank") {
                res.status(400).json({ mensagem: "Autenticação da gerência requerida para essa ação." });
            } else {
                next();
            }
            break;

        case "/contas/saldo":
        case "/contas/extrato":
        case "/transacoes/sacar":
        case "/transacoes/transferir":
            // Vericando existência e senha do cliente
            if (getCliente(conta) === -1) {
                res.status(400).json({ mensagem: 'Conta não encontrada!' });
            } else if (verificarSenhaCliente(conta, senha)) {
                res.status(400).json({ mensagem: "Senha inválida para essa conta." });
            } else {
                next();
            }
            break;

        default:
            next();
            break;
    }
}

const verificarSenhaCliente = (conta, senha) => {
    return contas.find(n => n.numero === conta).usuario.senha !== senha;
}

module.exports = { controlePermissoes };