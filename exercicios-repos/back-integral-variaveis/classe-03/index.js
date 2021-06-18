// Desconto para conseguir comprar.
const preco = 129.99,
    capital = 80;

const desconto = (((preco - capital) * 100) / preco).toFixed(0);

console.log(`Deverá ser dado ${desconto}% de desconto para eu possa comprar.`);