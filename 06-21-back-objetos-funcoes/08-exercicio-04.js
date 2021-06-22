const cartaoConsumo = {
    nome: "Giuliana",
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
            qtdade: 2
        },
        {
            nome: "X-Tudo",
            precoUnit: 1200,
            qtdade: 2
        }
    ]
}



function toReais(x) {
    return "R$ " + (x / 100).toFixed(2);
}

let valTotal = 0;
let nota = "";
const produtos = cartaoConsumo.prodConsumo;
for (let i = 0; i < produtos.length; i++) {
    valTotal += produtos[i].precoUnit * produtos[i].qtdade;

    nota += `\n${produtos[i].qtdade} ${produtos[i].nome}: ${toReais(produtos[i].precoUnit)} cada, total ${toReais(produtos[i].precoUnit * produtos[i].qtdade)}`;
}

const msgCaixa = `Olá ${cartaoConsumo.nome}, seu total a pagar é de R$ ${toReais(valTotal)}.\nSeus produtos foram:${nota}`;
console.log(msgCaixa);