const express = require('express');
const app = express();
const port = 8000;
app.use(express.json());

const convidados = ["Carlos", "Amanda", "Fernanda", "Juliana", "Lucas", "Roberto"];

app.get('/convidados', (req, res) => {
    let resp;
    if (req.query.nome) {
        const convidado = convidados.find(convidado => req.query.nome == convidado);
        const msg = convidado ? "Convidado presente." : "O convidado buscado não está presente na lista.";
        resp = { mensagem: msg };
    } else {
        resp = convidados;
    }
    res.json(resp);
}
);

app.post('/convidados', function (req, res) {
    const { nome } = req.query;
    let msg;
    if (nome) {
        const convidado = convidados.find(e => nome === e);
        if (convidado) {
            msg = { mensagem: "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também." };
        } else {
            convidados.push(nome);
            msg = { mensagem: "Convidado adicionado." };
        }
    } else {
        msg = { mensagem: "Envio do nome é obrigatório." };
    }
    res.json(msg);
})

app.delete('/convidados/:nome', function (req, res) {
    const { nome } = req.params;
    let msg;
    if (nome) {
        const convidado = convidados.findIndex(e => nome === e);
        if (convidado >= 0) {
            convidados.splice(convidado, 1);
            msg = { mensagem: "Convidado removido." };
        } else {
            msg = { mensagem: "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido." };
        }
    } else {
        msg = { mensagem: "É preciso enviar um nome." };
    }
    res.json(msg);
});

app.listen(port);