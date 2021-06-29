const nomes = ["Ana", "Joana", "Carlos", "amanda"];

const nomesComA = [];

for (const i of nomes) {
    if(i[0].toUpperCase()==="A"){
        nomesComA.push(i);
    }
}

console.log(nomesComA);