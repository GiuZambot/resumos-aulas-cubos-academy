const frase = "Eu sou uma frase com algumas palavras";
let r, arr;

r = frase.includes("sou");
console.log(r);

r = frase.includes("sou", 15);
console.log(r);

r = frase.indexOf("sou");
console.log(r);

r = frase.indexOf("sou", 15);
console.log(r);

r = frase.lastIndexOf("m");
console.log(r);

r = frase.lastIndexOf("m", 8);
console.log(r);

r = frase.slice(3, 6);
console.log(r);

r = frase.slice(-8);
console.log(r);

r = frase.substr(3, 3);
console.log(r);

r = frase.substr(-8, 4);
console.log(r);

r = frase.replace("uma frase", "um texto");
console.log(r);

r = frase.replace(/a/gi, "-");
console.log(r);

r = frase.replace(" ", ",").replace(" ", ",");
console.log(r);

// replaceAll
r = frase;
resultadoAnterior = "";
while (r != resultadoAnterior) {
    resultadoAnterior = r;
    r = r.replace(" ", ",");
}
console.log(r);

r = frase.toUpperCase();
console.log(r);

r = frase.toLowerCase();
console.log(r);

r = "  algo com espaços no começo e fim    ".trim()
console.log(r);

r = frase.padStart(55, "*** ");
console.log(r);

r = frase.padEnd(55, "*** ");
console.log(r);

r = frase.padStart(40, "*").padEnd(50, "*");
console.log(r);

function imprimir(dia, mes, ano) {
    dia = `${dia}`.padStart(2, "0");
    mes = `${dia}`.padStart(2, "0");
    console.log(`${dia}/${mes}/${ano}`);
}
imprimir(1, 1, 2020)
imprimir(5, 6, 1999)

r = frase.split(" ");
console.log(r);

// Métodos com Arrays
arr = frase.split(" ");
console.log("Split: " + arr);

r = arr.indexOf("sou");
console.log(r);

arr.reverse();
console.log("Reverse: " + arr);
arr.reverse();

r = arr.join(" ");
console.log("Join: " + r);

const a = [0, 1, 2, 3];
const b = [4, 5, 6, 7, 8, 9, 10];
arr = a.concat(b);
console.log("Concat: " + arr);

arr = arr.slice(1, 9);
console.log("Slice: " + arr);

// apartir de qual indice, quantos deletar, n número para adicionar
arr.splice(1, 0, ...a)
console.log("Splice: " + arr);