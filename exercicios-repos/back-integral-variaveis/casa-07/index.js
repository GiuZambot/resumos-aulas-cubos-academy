// Casos de COVID-19.
const po = 1000,
    x = 4,
    t = 100;

const p = (po * x ** (t / 7)).toFixed(0);

console.log(`Após ${t} dias, ${p} serão infectadas`);