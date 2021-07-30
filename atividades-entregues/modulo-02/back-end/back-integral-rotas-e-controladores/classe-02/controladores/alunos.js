const { alunos } = require('../dados/alunos');

let idMax = 0;

function getAluno(id, tipo) {
    let alunoAchado;
    if (tipo==="obj"){
        alunoAchado = alunos.find(l => id === l.id);
    } else {
        alunoAchado = alunos.findIndex(l => id === l.id);
    }
   return alunoAchado;
}

function get(req, res) {res.json(alunos);};

function getPorId(req, res) {
    const aluno = getAluno(req,"obj");
    let resp, status;
    if (aluno) {
        status = 200;
        resp = aluno;
    } else {
        status = 404;
        resp = { mensagem: "Não existe aluno para o ID informado." }
    };
    res.status(status);
    res.json(resp);
};

function post(req, res) {
    let resp, status;
    const { nome, sobrenome, idade, curso } = req.body;
    status = 201;
    resp = {id: ++idMax, nome, sobrenome, idade, curso};
    alunos.push(resp);
    res.status(status);
    res.json(resp);
}

function deleta(req, res) {
    let resp, status;
    const alunoAchado = getAluno(Number(req.params.id));
    if (alunoAchado >= 0) {
        alunos.splice(alunoAchado, 1);
        status = 200;
        resp = { mensagem: "Aluno removido." };
    } else {
        status = 400;
        resp = { mensagem: "Não existe aluno a ser removido para o ID informado." };
    }
    res.status(status);
    res.json(resp);
}

function put (req, res) {
    let msg;
    const id = Number(req.params.id);
    const alunoAchado = getAluno(id);
    const { nome, sobrenome, idade, curso } = req.body;
    if (alunoAchado >= 0) {
        if (!nome || !sobrenome || !idade || !curso) {
            status = 400;
            msg = { mensagem: "Existem dados faltando para substituir o aluno" };
        } else {
            status = 201;
            msg = { id, nome, sobrenome, idade, curso };
            alunos.splice(alunoAchado, 1, msg);
        }
    } else {
        status = 201;
        msg = {id: ++idMax, nome, sobrenome, idade, curso};
        alunos.push(msg);
    }
    res.status(status);
    res.json(msg);
};

function patch (req, res) {
    const alunoPatch = req.body;
    const alunoAchado = getAluno(Number(req.params.id));
    let msg, status;
    console.log(alunoAchado);
    if (alunoAchado >= 0) {
        for (let i in alunoPatch) {
            if (i === "id") continue;
            if (!alunos[alunoAchado][i]) continue;
            alunos[alunoAchado][i] = alunoPatch[i];
        }
        status = 201;
        msg = alunos[alunoAchado];
    } else {
        status = 400;
        msg = { mensagem: "Não existe aluno a ser alterado para o ID informado." };
    }
    res.status(status);
    res.json(msg);
};



module.exports = {get, getPorId, post, put, patch, deleta};