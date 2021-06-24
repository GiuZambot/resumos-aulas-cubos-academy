const arr = [2,5,8,9,5];

// For de c
console.log("for");
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}

// for of, retorna o conteúdo de cada posição, o iterator
console.log("\nfor of");
for (const iterator of arr) {
    console.log(iterator);
}

// Retorna a chave de cada posição, a key
console.log("\nfor in");
for (const key in arr) {
    console.log(arr[key]);
}

// Executa a função para cada item da array
console.log("\nforEach");
arr.forEach((x) => {console.log(x);});