const nomes = ["Maria", "João", "Pedro", "José", "André"];

console.log(nomes[1]);

nomes[1] = "Carlos";// João foi subistituido por Carlos

console.log(nomes[1]); 

// Pode se usar uma variável no lugar do número do indice
const x = 4;
nomes[x] = "Zeca";// André foi subistituido por Zeca

console.log(nomes[x]); 