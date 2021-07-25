const express = require('express');
const app = express();
const port = 3000;

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let jogador = 0;

app.get('/', (req, res) => {
    if (jogador === jogadores.length)
        jogador = 0;
    res.send(`É a vez de ${jogadores[jogador]} jogar!`);
    jogador++;
});

app.listen(port, () => console.log(`Escutando porta ${port}`));