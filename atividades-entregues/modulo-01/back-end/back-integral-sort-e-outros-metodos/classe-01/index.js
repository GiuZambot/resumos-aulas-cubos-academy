const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

// // a
// console.log(numeros.sort((a, b) => a - b));

// // b
// console.log(numeros.sort((a, b) => b - a));

// c
console.log(numeros.sort());

//d
console.log(frutas.sort(
    (a, b) => a.localeCompare(b)
));

//e
console.log(frutas.sort(
    (a, b) => b.localeCompare(a)
));

//f
console.log(frutas.sort(
    (a, b) => a.length - b.length
));