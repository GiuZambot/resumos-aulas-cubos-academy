// Soma dos ângulos internos de um polígono.
const ladosPoly = 6;

const soma = (ladosPoly - 2) * 180;
const valorLados = soma / ladosPoly;

console.log(`Soma dos ângulos internos de um polígono de ${ladosPoly} lados é ${soma}, se seus lados forem todos iguais, casa um teria ${valorLados}º...`);