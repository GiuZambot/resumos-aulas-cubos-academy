const diaDaSemana = 3;

const map = { 1: "Segunda-feira", 2: "Terça-feira", 3: "Quarta-feira", 4: "Quinta-feira", 5: "sexta-feira", 6: "sábado", 7: "Domigo" };

if (diaDaSemana > 0 && diaDaSemana <= 7) {
    console.log(map[diaDaSemana]);
} else {
    console.log("O dia da semana informado não é válido.");
}