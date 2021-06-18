// Área de um cilindro.
const raio = 5,
    altura = 10,
    pi = Math.PI;

const areaCilindro = ((2 * pi * raio * altura) + (2 * pi * (raio ** 2))).toFixed(2);

console.log(`A area total do cilindo é ${areaCilindro}.`);