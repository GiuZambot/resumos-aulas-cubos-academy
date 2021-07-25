const express = require('express');
const app = express();
const port = 8000;

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let jogador = 0;

app.get('/', (req, res) => {
    if (jogador === jogadores.length)
        jogador = 0;
    res.send(`É a vez de ${jogadores[jogador]} jogar!`);
    jogador++;
});

app.get('/remover', (req, res) => {
    if (isNaN(Number(req.query.indice))) {
        res.send(`O indice não é um número`);
        return;
    }

    const remove = Number(req.query.indice);
    console.log(jogadores[remove]);
    if (typeof jogadores[remove] === "undefined") {
        res.send(`Não existe jogador no índice informado (${remove}) para ser removido`);
    } else {
        jogadores.splice(remove, 1);
        res.send(`${jogadores}`);
    }
});

app.get('/adicionar', (req, res) => {
    const add = Number(req.query.indice);
    if (isNaN(add) && typeof req.query.indice !== "undefined") {
        res.send(`O indice não é um número`);
        return;
    }

    if (typeof req.query.nome === "undefined" || req.query.nome.length === 0) {
        res.send(`Nome é obrigatório`);
        return;
    }

    if (isNaN(add)) {
        jogadores.push(req.query.nome);
        res.send(`${jogadores}`);
    } else {
        if (typeof jogadores[add] === "undefined") {
            res.send(`O índice informado (${add}) não existe no array. Novo jogador não adicionado.`);
        } else {
            jogadores.splice(add, 0, req.query.nome)
            res.send(`${jogadores}`);
        }
    }
});

app.listen(port, () => console.log(`Escutando porta ${port}`));