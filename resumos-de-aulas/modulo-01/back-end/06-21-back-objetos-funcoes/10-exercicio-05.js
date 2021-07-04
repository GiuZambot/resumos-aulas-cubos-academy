function apresenta(pessoa) {
    let trataG = "uma", trataI = "jovem", trataA = "a";

    if (pessoa.genero === "feminino") {
        trataG = "uma";
        trataA = "a"
    } else {
        trataG = "um";
        trataA = "o";
    }

    if (pessoa.idade < 25) {
        trataI = "jovem";
    } else if (pessoa.idade < 65) {
        trataI = "adult" + trataA;
    } else {
        trataI = "idos" + trataA;
    }

    console.log(`Olá! Meu nome é ${pessoa.nome}, sou ${trataG} ${trataI} de ${pessoa.idade} anos, ${pessoa.altura} de altura e sou ${pessoa.profissao}.`);
}


const pessoa = {
    nome: "Giuliana",
    genero: "feminino",
    idade: 41,
    profissao: "Programadora",
    altura: 1.74
}

apresenta(pessoa);

const pessoa2 = {
    nome: "Giuliana",
    genero: "feminino",
    idade: 41,
    profissao: "Programadora",
    altura: 1.74
}

apresenta(pessoa2);