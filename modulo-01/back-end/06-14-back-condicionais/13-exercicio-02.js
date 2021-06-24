const valorDaCompra = 10000;
const numeroDeParcelas = 12;
const desconto = 10;
const taxa = 1;

if (numeroDeParcelas === 1) {
    // Ou calcula o valor do desconto, caso precise
    const valorDoDesconto = valorDaCompra * (desconto / 100);
    const valorFinal = (valorDaCompra - valorDoDesconto);
    // ou faria o calculo do valor final 
    //const valorFinal = alorDaCompra * (1-(desconto/100));
    // Transforma de centavos para reais
    const valorFinalEmReais = valorFinal / 100;
    console.log(`Você pagará à vista, com 10% de desconto, valor final: R$ ${((valorDaCompra * 0.9)/100).toFixed(2)}`);
} else if (numeroDeParcelas >= 2 && numeroDeParcelas < 7) {
    const valorDaParcelaEmReais = ((valorDaCompra / numeroDeParcelas) / 100).toFixed(2);
    console.log(`Você pagará em ${numeroDeParcelas} parcelas de R$ ${valorDaParcelaEmReais}, sem juros.`);
} else if (numeroDeParcelas <= 12) {
    const valorDoMontante = (valorDaCompra * ((1 + (taxa / 100)) ** numeroDeParcelas));
    const valordaparcelaEmReais = ((valorDoMontante / numeroDeParcelas) / 100).toFixed(2);
    console.log(`Você pagará em ${numeroDeParcelas} parcelas de R$ ${valordaparcelaEmReais}, com juros de ${taxa}%, totalizando R$${(valorDoMontante/100).toFixed(2)}.`);
} else {
    console.log(`Não é possível dividir em ${numeroDeParcelas}`);
}