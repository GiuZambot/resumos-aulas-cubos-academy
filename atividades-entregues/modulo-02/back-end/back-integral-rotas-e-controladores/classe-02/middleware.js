const { cursos } = require('./dados/cursos');

function validaSenha(req, res, next) {
    if (req.method !== "GET" && req.query.senha !== "cubos123") {
        res.json({mensagem: "Autenticação requerida para essa ação"})
    } else {
        next();
    }
}

function validaDados(req, res, next) {
    const { nome, sobrenome, idade, curso } = req.body;
    switch (req.method) {
        case "POST":
        case "PUT":
            if (!nome || !sobrenome || !idade || !curso) {
                res.status(400);
                res.json({mensagem: "Existem dados faltando para adicionar o aluno."});
                // next();
            } else if (Number(idade) < 18) {
                res.status(400);
                res.json({mensagem: "Aluno não pode ter menos de 18 anos."});
            } else if (!cursos.includes(curso)) {
                res.status(400);
                res.json({mensagem: "Curso não encontrado, aluno não inserido/alterado."});
            } else {
                next();
            }
            break;
        case "PATCH":
            if (!cursos.includes(curso)) {
                res.status(400);
                res.json({mensagem: "Curso não encontrado, aluno não inserido/alterado."});
            } else {
                next();
            }
            break;
        default:
            next();
            break;
    }

    
}

module.exports = {validaSenha, validaDados};