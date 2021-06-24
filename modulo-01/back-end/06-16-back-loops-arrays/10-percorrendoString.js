// Strings são como arrays
const palavra = "Alemanha";

let encontrado = false;
for (const iterator of palavra) {
    if(iterator==="h") {
        encontrado = true;
        console.log("Tem a letra h.");
        break;
    }
}

if (!encontrado) {
    console.log("Não foi encontrado h.");
}