//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento==="credito"){
    console.log(`Valor a ser pago: R$${((valorDoProduto*0.95)/100).toFixed(2)}.`);
} else if (tipoDePagamento==="cheque"){
    console.log(`Valor a ser pago: R$${((valorDoProduto*0.97)/100).toFixed(2)}.`);
} else {
    console.log(`Valor a ser pago: R$${((valorDoProduto*0.90)/100).toFixed(2)}.`);
}