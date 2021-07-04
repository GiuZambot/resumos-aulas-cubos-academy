const nomes = ["EUA", "Argentina", "Japão", "Russia", "Uruguay"];

// Adicionandpo Brasl no final
nomes.push("Brasil");
console.log(nomes);

// Removendo Brasil do final
nomes.pop();
console.log(nomes);

// Inserindo Espanha no inicio
nomes.unshift("Espanha");
console.log(nomes);

// Removendo Epanha do inicio
nomes.shift();
console.log(nomes);

// Imprimindo o último da lita
console.log(nomes[nomes.length-1]);

//Imprimindo o segundo
console.log(nomes[1]);

//imprimindo o de índice 2
console.log(nomes[2]);