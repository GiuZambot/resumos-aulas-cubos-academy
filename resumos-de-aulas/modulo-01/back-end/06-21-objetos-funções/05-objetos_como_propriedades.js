// Objeto dentro de objeto
const carro = {
    marca: "Toyota",
    modelo: "Etios",
    ano: 2017,
    potencia: 800,
};

const objPessoa = {
    nome: "Giu",
    idade: 41,
    altura: 1.74,
    temCNH: true,
    apelidos: ["Giu", "Giulia", "Giuli"],
    carro // coloca o valor como uma variáva assim carro: carro, pode ser usado dessas formas ou digitando o objeto diretamente
};

console.log(objPessoa);