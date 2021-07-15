const arr = [1, 2, 10, 3, 4, 5];

console.log(arr.every(x => x < 10)); // true

// ver se é inteiro
console.log(1.25 % 1 === 0); // false porque não é inteiro

// outra forma
console.log(1.25 === Math.floor(1.25)); // false pois não é inteiro
console.log(1 === Math.floor(1)); // true pois é inteiro

// tem algo maior que 4
console.log(arr.some(x => x > 4));


// reduce somando
console.log(arr.reduce((x, y) => x + y));

// reduce mairo
console.log(arr.reduce((x, y) => y > x ? y : x));

// sort correto com número
let arrs = arr.sort((a, b) => a - b);
console.log(arrs);

// sort correto com número decrescente ou (b - a)
arrs = arr.sort((a, b) => {
    if (a > b) {
        return -1;
    } else if (a > b) {
        return +1
    } else {
        return 0;
    }
});
console.log(arrs);

const arrN = ["ana", "João", "Amanda", "Carlos", "Ánatema"];

arrN.sort((a, b) => a.localeCompare(b));

console.log(arrN);

//Exercício
const pessoas = [
    {
        nome: "João",
        idade: 30
    },
    {
        nome: "Maria",
        idade: 28
    },
    {
        nome: "Ana",
        idade: 25
    },
    {
        nome: "Ana",
        idade: 26
    },
    {
        nome: "Carla",
        idade: 12
    },
    {
        nome: "Pedro",
        idade: 40
    }
];

pessoas.sort((a, b) => {
    if (a.idade < b.idade) {
        return -1;
    } else if (b.idade < a.idade) {
        return +1;
    } else {
        return a.nome.localeCompare(b.nome);
    }
});

console.log(pessoas);