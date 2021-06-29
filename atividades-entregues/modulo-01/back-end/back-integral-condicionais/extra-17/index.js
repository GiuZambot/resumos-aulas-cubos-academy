//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

const valorDaParcela = (valorDoProduto / quantidadeDoParcelamento);

const restaQuantasParcelas = (valorDoProduto - (valorPago * 100)) / valorDaParcela;

console.log(`Restam ${restaQuantasParcelas} parcelas de R$${(valorDaParcela/100).toFixed(2)}`);