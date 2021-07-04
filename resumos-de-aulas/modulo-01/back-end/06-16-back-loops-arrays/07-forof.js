const nomes = ["Maria", "João", "Pedro", "José", "André"];

// For de c
console.log("for");
for (let index = 0; index < nomes.length; index++) {
    console.log(nomes[index]);
}

// for of, retorna o conteúdo de cada posição, o iterator
console.log("\nfor of");
for (const iterator of nomes) {
    console.log(iterator);
}

// Retorna a chave de cada posição, a key
console.log("\nfor in");
for (const key in nomes) {
    console.log(nomes[key]);
}

// Executa a função para cada item da array
console.log("\nforEach");
nomes.forEach((x) => {console.log(x);});