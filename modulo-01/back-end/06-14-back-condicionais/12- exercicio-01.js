// a vista 10%
// parcelar até 6x sem desconto
// imprimir o valor na tela modo e valor de parcelas

const valorDaCompra = 10000;
const numeroDeParcelas = 2;
const desconto = 10;

if (numeroDeParcelas === 1) {
    console.log(`Você pagará à vista, com 10% de desconto, valor final: R$ ${((valorDaCompra * 0.9)/100).toFixed(2)}`);
} else {
    console.log(`Você pagará em ${numeroDeParcelas} parcelas de R$ ${((valorDaCompra/numeroDeParcelas)/100).toFixed(2)}, sem juros.`);
}

// Igual, porém mais detalhado:
if (numeroDeParcelas === 1) {
    // Ou calcula o valor do desconto, caso precise
    const valorDoDesconto = valorDaCompra * (desconto / 100);
    const valorFinal = (valorDaCompra - valorDoDesconto);
    // ou faria o calculo do valor final 
    //const valorFinal = alorDaCompra * (1-(desconto/100));
    // Transforma de centavos para reais
    const valorFinalEmReais = valorFinal / 100;
    console.log(`Você pagará à vista, com 10% de desconto, valor final: R$ ${((valorDaCompra * 0.9)/100).toFixed(2)}`);
} else {
    const valorDaParcelaEmReais = ((valorDaCompra/numeroDeParcelas)/100).toFixed(2);
    console.log(`Você pagará em ${numeroDeParcelas} parcelas de R$ ${valorDaParcelaEmReais}, sem juros.`);
}