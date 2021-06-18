const numeros = [8, 11, 4, 1];

let maior = 0;
let menor = Infinity;
for (const i of numeros) {
    if (i > maior){
        maior = i;
    }
    if (i < menor) {
        menor = i;
    }    
}

console.log(maior-menor);