// Calcula o índice de massa corporal.
const nome = "Giu",
    peso = 72,
    altura = 1.74;

const imc = (peso / altura ** 2).toFixed(1);

console.log(`${nome} seu IMC é ${imc}`);