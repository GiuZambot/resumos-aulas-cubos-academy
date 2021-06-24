const objPessoa = {
    nome: "Giu",
    idade: 41,
    altura: 1.74,
    temCNH: true,
    apelidos: ["Giu", "Giulia", "Giuli"]
};

objPessoa.peso = 70;
objPessoa.nome = "Giuliana"
objPessoa["idade"] = 21;
const prop = "altura";
objPessoa[prop] = 1.70;
objPessoa.apelidos[0] = "Giuza";
objPessoa.apelidos.push("Giugiu", "Gi");
objPessoa.teste = "Será apagado";
delete objPessoa.teste;

const cnh = objPessoa.temCNH ? "tem" : "não tem";
let apelidos = "";
for (const i of objPessoa.apelidos) {
    apelidos += `- ${i}\n`;
}

console.log(`${objPessoa.nome} tem ${objPessoa.idade}, ${objPessoa.altura}cm de altura, ${objPessoa.peso}kg, ${cnh} CNH e os seguintes apelidos:\n${apelidos}`);

// Deletando uma propriedade. Cuidado, essa operação é mais lenta do que setar para null, "", 0 etc
objPessoa.teste = "Será apagado";
delete objPessoa.teste;

console.log(objPessoa.teste);