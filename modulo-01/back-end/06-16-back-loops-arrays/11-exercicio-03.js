// Verificando quantas letras 'a' tem numa palavra

const paralra = "alemanha";

let letrasA = 0;
for (const letra of paralra) {
    if (letra === "a") {
        letrasA++;
    }
}
if (letrasA === 0) {
    console.log(`Nâo foi encontrada nenhuma letras 'a' em ${paralra}.`);    
} else if (letrasA === 1) {
    console.log(`Foi encontrada uma letras 'a' em ${paralra}.`);
} else {
    console.log(`Foram encontradas ${letrasA} letras 'a' em ${paralra}.`);
}