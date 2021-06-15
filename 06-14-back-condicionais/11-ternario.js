
const saldo = 1;

// Verificar o que usar, reais ou real.
const unidade = saldo === 1 ? "real" : "reais";
console.log(`Ele tem ${saldo} ${unidade}.`);

// Ou direto na chave
console.log(`Ele tem ${saldo} ${saldo === 1 ? "real" : "reais"}.`);