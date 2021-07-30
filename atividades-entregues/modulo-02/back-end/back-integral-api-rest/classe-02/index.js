const express = require('express');
const app = express();
const port = 8000;
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "A Odisséia de Jonas",
        autor: "Thomas Crawling",
        ano: 2001,
        numPaginas: 197
    },
    {
        id: 2,
        titulo: "Jonas e a sociedade escondida",
        autor: "Claire Crawling",
        ano: 2004,
        numPaginas: 158
    }
];

let idMax = livros.reduce((a, c) => a.id > c ? a.id : c).id;

app.get('/livros', (req, res) => {
    res.json(livros);
});

app.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const livro = livros.find(l => id === l.id);
    resp = livro ? livro : { mensagem: "Não existe livro para o ID informado." };
    res.json(resp);
})

app.post('/livros', function (req, res) {
    let msg;
    const { titulo, autor, ano, numPaginas } = req.body;
    if (!titulo || !autor || !ano || !numPaginas) {
        msg = { mensagem: "Existe dados faltando para adicionar o livro" };
    } else {
        msg = { id: ++idMax, titulo, autor, ano, numPaginas };
        livros.push(msg);
    }
    res.json(msg);
});

app.put('/livros/:id', function (req, res) {
    const id = Number(req.params.id);
    let msg;
    const livroAchado = livros.findIndex(l => id === l.id);
    if (livroAchado >= 0) {
        const { titulo, autor, ano, numPaginas } = req.body;
        if (!titulo || !autor || !ano || !numPaginas) {
            msg = { mensagem: "Existe dados faltando para substituir o livro" };
        } else {
            msg = { id, titulo, autor, ano, numPaginas };
            livros.splice(livroAchado, 1, msg);
        }
    } else {
        msg = { mensagem: "Não existe livro a ser substituído para o ID informado." };
    }
    res.json(msg);
});

app.patch('/livros/:id', function (req, res) {
    const id = Number(req.params.id);
    const livroPatch = req.body;
    let msg;
    const livroAchado = livros.findIndex(l => id === l.id);
    if (livroAchado >= 0) {
        for (let i in livroPatch) {
            if (i === "id") continue;
            if (!livros[livroAchado][i]) continue;
            livros[livroAchado][i] = livroPatch[i];
        }
        msg = livros[livroAchado];
    } else {
        msg = { mensagem: "Não existe livro a ser substituído para o ID informado." };
    }
    res.json(msg);
});

app.delete('/livros/:id', function (req, res) {
    const id = Number(req.params.id);
    let msg;
    const livroAchado = livros.findIndex(l => id === l.id);
    if (livroAchado >= 0) {
        livros.splice(livroAchado, 1);
        msg = { mensagem: "Livro removido." };
    } else {
        msg = { mensagem: "Não existe livro a ser removido para o ID informado." };
    }
    res.json(msg);
});

app.listen(port);