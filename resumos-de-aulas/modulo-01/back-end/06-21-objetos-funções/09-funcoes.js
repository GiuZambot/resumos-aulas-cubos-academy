function logarOla() {
    console.log("Olá");
}

logarOla();

function olaPara(pessoa) {
    console.log(`Olá ${pessoa}!`);
}

olaPara("José");

function detectarMaiorIdade(nome, idade) {
    if (idade > 18) {
        return true;
    } else {
        return false;
    }
}

let nome = "João";
let idade = 19;

let ehMaiorDeIdade = detectarMaiorIdade(nome, idade);

console.log(ehMaiorDeIdade);