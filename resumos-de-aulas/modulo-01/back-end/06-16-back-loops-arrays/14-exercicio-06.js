// Imprimindo o índice de um valor encontrado numa array

const nomes = ["Maria", "Carlos", "João", "Pedro", "José", "André"];

console.log("Usando for");
let encontrado = false;
for (let i = 0; i < nomes.length; i++) {
    if (nomes[i] === "João") {
        console.log(`João encontrado com o índice ${i}`);
        encontrado = true;
    }
}
if (!encontrado) {console.log("João não foi encontrado");}

console.log("\nUsando for of");
let i = 0;
encontrado = false;
for (const nome of nomes) {
    if (nome === "João") {
        console.log(`João encontrado com o índice ${i}`);
        encontrado = true;
    }
    i++;
}
if (!encontrado) {console.log("João não foi encontrado");}

console.log("\nUsando for in");
encontrado = false;
for (const i in nomes) {
    if (nomes[i] === "João") {
        console.log(`João encontrado com o índice ${i}`);
        encontrado = true;
    }
}
if (!encontrado) {console.log("Jão não foi encontrado");}

console.log("\nUsando while");
encontrado = false;
i = 0;
while (encontrado === false && i <= nomes.length) {
    if (nomes[i] === "João") {
        console.log(`João encontrado com o índice ${i}`);
        encontrado = true;
    }
    i++;
}
if (!encontrado) {console.log("João não foi encontrado");}