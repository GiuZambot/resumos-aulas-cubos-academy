const numeros = [3, 24, 1, 8, 11, 7, 15];

let maior = 0;
for (const i of numeros) {
    if (i > maior){
        maior = i;
    }
}

console.log(maior);