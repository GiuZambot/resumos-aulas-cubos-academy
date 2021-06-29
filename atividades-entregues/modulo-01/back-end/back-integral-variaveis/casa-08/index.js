// Calculo do perímetro e área de um círculo.
const raio = 5;

const perimetro = (2 * Math.PI * raio).toFixed(2);
const area = (Math.PI * (raio ** 2)).toFixed(2);

console.log(`O perímetro de um circulo de raio ${raio} é ${perimetro} e sua área é de ${area}`);