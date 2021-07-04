// Acessando Objetos

const objPessoa = {
    nome: "Giu",
    idade: 41,
    altura: 1.74,
    temCNH: true,
    apelidos: ["Giu", "Giulia", "Giuli"]
};

const varBusca = "nome";

console.log(`Bem-vinda ${objPessoa.nome}`);
console.log(`Bem-vinda ${objPessoa["nome"]}`);
console.log(`Bem-vinda ${objPessoa[varBusca]}`);