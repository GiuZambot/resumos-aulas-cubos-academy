const pessoa = {
    nome: "Carlos",
    idade: 28,
    cidade: "Porto Alegre",
    apelidos: [
        "Carlão",
        "Carlinhos",
        "Carluxo"
    ]
};

const { nome, idade, ...resto } = pessoa;

console.log(nome);
console.log(idade);
console.log(resto);