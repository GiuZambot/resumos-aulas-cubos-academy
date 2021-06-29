const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

for (const i of filaDeFora) {
    if (filaDeDentro.length < 5) {
        filaDeDentro.push(i);
    }
}

console.log(filaDeDentro, filaDeFora);