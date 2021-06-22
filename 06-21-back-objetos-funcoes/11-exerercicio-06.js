// Exercício 5 - Refatorado

const pessoa = {
    nome: "Giuliana",
    genero: "feminino",
    idade: 41,
    profissao: "Programadora",
    altura: 1.74,
    apresentar: function () {
        let trataG = "uma", trataI = this.faixaEtaria(this.idade), trataA = "a";

        if (this.genero === "feminino") {
            trataG = "uma";
            trataA = "a"
        } else {
            trataG = "um";
            trataA = "o";
        }

        console.log(`Olá! Meu nome é ${this.nome}, sou ${trataG} ${trataI}${trataA} de ${this.idade} anos, ${this.altura} de altura e sou ${this.profissao}.`);
    },
    faixaEtaria: function () {
        let trataI = "";
        if (this.idade < 25) {
            trataI = "jovem";
        } else if (this.idade < 65) {
            trataI = "adult";
        } else {
            trataI = "idos";
        }
        return trataI;
    }
}

pessoa.apresentar();
console.log(pessoa.faixaEtaria());