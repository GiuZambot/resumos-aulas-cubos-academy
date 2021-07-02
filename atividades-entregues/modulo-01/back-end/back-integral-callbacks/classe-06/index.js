const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho'];

const interval = (10 / jogadores.length) * 1000;
let jogador = 0;
console.log(`Jogue agora! ${jogadores[jogador]}`);
const tempor = setInterval(() => {
    if (jogador == jogadores.length - 1) {
        clearInterval(tempor);
        console.log("A rodada Terminou");
    } else {
        jogador++;
        console.log(`Jogue agora! ${jogadores[jogador]}`);
    }
}, interval);