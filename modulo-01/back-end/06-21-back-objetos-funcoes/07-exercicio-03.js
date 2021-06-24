const cartaoConsumo = {
    nome: "",
    idade: 41,
    prodConsumo: [
        {
            nome: "Batata Frita",
            precoUnit: 900,
            qtdade: 1
        },
        {
            nome: "Coca",
            precoUnit: 500,
            qtdade: 1
        },
        {
            nome: "X-Tudo",
            precoUnit: 1200,
            qtdade: 1
        }
    ]
}

console.log(cartaoConsumo.nome);
console.log(cartaoConsumo.idade);
cartaoConsumo.idade = 100;
console.log(cartaoConsumo.idade);
console.log(cartaoConsumo.prodConsumo[0].nome);
console.log((cartaoConsumo.prodConsumo[cartaoConsumo.prodConsumo.length - 1].precoUnit / 100).toFixed(2));
