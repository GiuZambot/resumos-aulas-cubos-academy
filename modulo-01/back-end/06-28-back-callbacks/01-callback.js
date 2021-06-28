const fs = require('fs');

// // lendo arquivo
// console.log("Antes de ler arquivo");

// fs.readFile("./teste.txt", (err, data) => {
//     console.log(data.toString());
// });

// console.log("Depois da chamada, mas executado antes");

// // temporizadores

// let agendado = setTimeout(() => {
//     console.log("Acabou o tempo");
// }, 1000);

// agendado = setTimeout(() => {
//     console.log("Será cancelado pela próxima");
// }, 5000);

// clearTimeout(agendado);

// console.log("Cancelado o último timeout");

// agendado = setInterval(() => {
//     console.log("intervalo");
// }, 500);

// setTimeout(clearInterval, 2000, agendado);

// let contagem = 10;

// agendado = setInterval(() => {
//     console.log(`Bomba explodirá em ${contagem}`);
//     contagem--;
//     contagem < 0 ? (console.log("BOOOMMMM"), clearInterval(agendado)) : false;
// }, 300);

//escrevendo arquivo
// fs.writeFile("./logs.txt", "Log", () => {
//     console.log("Arquivo salvo ");
// });

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const filtered = arr.filter(x => x > 5).filter(x => x % 2 === 0);

// console.log("Filtro: " + filtered.toString());

// const arrModificado = arr.map(x => x ** 2);

// console.log(arrModificado);

// arr.forEach(element => {
//     console.log(element);
// });

// const arrTxt = ["goiaba", "Canela", "pindamonhangaba", "azul", "kahoots"];

// const finded = arrTxt.find(x => x.length > 10);

// finded ? console.log(finded) : console.log("Não econtrado");

// const indexOfTxt = arrTxt.findIndex(x => x.length > 10);

// indexOfTxt != -1 ? console.log(indexOfTxt) : console.log("Não econtrado");

const pessoa = [
    {
        nome: "José",
        idade: 30,
        altura: 173
    },
    {
        nome: "Pedro",
        idade: 12,
        altura: 144
    },
    {
        nome: "Maria",
        idade: 38,
        altura: 156
    }
];

//criando nova array modificada

const arrModif = pessoa.map(x => {
    return {
        nome: x.nome,
        idade: `${x.idade} anos`,
        altura: `${x.altura / 100}m`,
        maioridade: x.idade >= 18 ? "É maior de idade" : "É menor de idade"
    }
})

console.log(arrModif);


// transformando a array original
pessoa.map(x => {
    x.maioridade = x.idade >= 18 ? "É maior de idade" : "É menor de idade";
    x.idade = `${x.idade} anos`;
    x.altura = `${x.altura / 100}m`;
});

console.log(pessoa);