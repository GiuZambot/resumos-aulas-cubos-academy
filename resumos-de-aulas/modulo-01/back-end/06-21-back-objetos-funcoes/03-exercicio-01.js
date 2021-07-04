const objPessoa = {
    nome: "Giu",
    idade: 41,
    altura: 1.74,
    temCNH: true,
    apelidos: ["Giu", "Giulia", "Giuli"]
};

const cnh = objPessoa.temCNH ? "tem" : "não tem";

let apelidos = "";
for (const i of objPessoa.apelidos) {
    apelidos += `- ${i}\n`;
}

console.log(`${objPessoa.nome} tem ${objPessoa.idade}, ${objPessoa.altura}cm de altura, ${cnh} CNH e os seguintes apelidos:\n${apelidos}`);