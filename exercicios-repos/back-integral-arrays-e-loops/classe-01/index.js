// Formas de somar uma array em js
const numeros = [2, 3, 4, 6];

console.log("Soma com forEach");
let soma = 0;
numeros.forEach(x => { soma += x });
console.log(soma);

console.log("\nSoma com for of");
soma = 0;
for (const numero of numeros) {
    soma += numero;
}
console.log(soma);

console.log("\nSoma com for in");
soma = 0;
for (const key in numeros) {
    soma += numeros[key];
}
console.log(soma);

console.log("\nSoma com for de C");
soma = 0;
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}
console.log(soma);

console.log("\nSoma com while");
soma = 0;
let i = 0;
while (i < numeros.length) {
    soma += numeros[i];
    i++;
}
console.log(soma);

console.log("\nSoma com join");
soma = eval(numeros.join('+'));
console.log(soma);

console.log("\nSoma com eval");
soma = eval(numeros.join('+'));
console.log(soma);

console.log("\nSoma com function e reduce");
function add(accumulator, a) { return accumulator + a; }
soma = numeros.reduce(add);
console.log(soma);

console.log("\nSoma com reduce com func arrow");
soma = 0;
soma = numeros.reduce((acc, x) => acc + x, 0);
console.log(soma);

console.log("\nSoma com recursão");
function somar(arr, n) {
    if (n == 0) {
        return 0;
    } else {
        return arr[n - 1] + somar(arr, n - 1); // chamada recursiva
    }
}
console.log(somar(numeros, numeros.length));