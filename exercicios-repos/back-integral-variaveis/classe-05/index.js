// Calculo da distância entre dois pontos.
const x1 = 1,
    y1 = 2,
    x2 = 1,
    y2 = 5;

const d = ((((x2 - x1) ** 2) + ((y2 - y1) ** 2)) ** 0.5).toFixed(2);

console.log(`A distância entre X1 e X2 é ${d}`);