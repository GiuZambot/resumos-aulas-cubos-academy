// Iteração de arrays
// Iteração com loop for of

const letras = ["A", "a", "B", "C", "E", "e"];

let qtstem = 0;
for (const letra of letras) {
    if (letra.toUpperCase() === "E") {
        qtstem++;
    }
}

if (!qtstem) {
    console.log(`Nenhuma letra "E" ou "e" foi encontrada.`);
} else {
    const unid = qtstem === 1 ? "" : "s";
    console.log(`Encontrada${unid} ${qtstem} letra${unid} "E" ou "e".`);
}