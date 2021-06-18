const numeros = [54, 22, 14, 87, 10, 284, 100];

// Com indexOf
const indice = numeros.indexOf(100);
console.log(indice);

// com for
let i = -1;
for (const key in numeros) {
    if (numeros[key] === 100) {
        i = key;
        break;
    }
}
console.log(i);