const express = require('express');
const app = express();
const port = 8000;
const relogio = { min: 0, seg: 0 };
let tempor;
let isPaused = false;

function crono(command) {
    let msg;
    if (command === '/') {
        const min = relogio.min.toString().padStart(2, '0');
        const seg = relogio.seg.toString().padStart(2, '0');
        msg = `Tempo atual do cronômetro: ${min} minutos e ${seg} segundos`;
    } else if (command === '/iniciar') {
        if (typeof tempor !== "undefined") {
            msg = "Cronômetro já iniciado";
            return msg;
        }
        tempor = setInterval(() => {
            if (isPaused)
                return;
            if (relogio.seg == 59) {
                relogio.min++;
                relogio.seg = 0;
            } else {
                relogio.seg++;
            }
        }, 1000);
        msg = "Cronômetro iniciado!";
    } else if (command === '/pausar') {
        isPaused = true;
        msg = "Cronômetro pausado!";
    } else if (command === '/continuar') {
        isPaused = false;
        msg = "Cronômetro continuando!";
    } else if (command === '/zerar') {
        relogio.min = 0;
        relogio.seg = 0;
        msg = "Cronômetro zerado!";
    } else {
        msg = "Comando não reconhecido";
    }
    return msg;
}

app.get('/*', function (req, res) {
    const msg = crono(req.url);
    res.send(msg);
});

app.listen(port, () => console.log(`Escutando porta ${port}`));