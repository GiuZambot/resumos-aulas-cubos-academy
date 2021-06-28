const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
]

const nomesA = nomes.filter(x => x.charAt(0).toLocaleLowerCase() == "a");

console.log(nomesA);