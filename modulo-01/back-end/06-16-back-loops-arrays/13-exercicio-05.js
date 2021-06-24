// Imprimindo somente os pares de 1 a 50

console.log("Com for");
for (let index = 1; index <= 50; index++) {
    if (index % 2 === 0) {
        console.log(index);
    }
}

console.log("\nCom while");
let numero = 2;
while (numero <= 50) {
    console.log(numero);
    numero += 2;
}