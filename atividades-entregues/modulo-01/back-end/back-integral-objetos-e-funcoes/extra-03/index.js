// Carrinho de compras
// Manipulação de objeto com seus métodos

const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    calcularTotalDeItens: function () {
        let totalDeItens = 0;
        for (const item of this.produtos) { totalDeItens += item.qtd; }
        return totalDeItens;
    },
    calcularTotalAPagar: function () {
        let totalAPagar = 0;
        for (const item of this.produtos) { totalAPagar += item.precoUnit * item.qtd; }
        return totalAPagar;
    },
    calcularDesconto: function () {
        // Desconto para mais de 4 itens        
        const totalAPagar = this.calcularTotalAPagar();
        valorAcimaDe100 = totalAPagar >= 10000 ? totalAPagar * 0.1 : 0;
        let valorMaisQ4 = 0;
        if (this.calcularTotalDeItens() >= 4) {
            let maisBatato = Infinity;
            for (const item of this.produtos) {
                maisBatato = item.precoUnit < maisBatato ? item.precoUnit : maisBatato;
            }
            valorMaisQ4 = maisBatato;
        }
        return valorMaisQ4 > valorAcimaDe100 ? valorMaisQ4 : valorAcimaDe100;
    },
    imprimirResumoDoCarrinho: function () {
        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`);
        console.log(`Valor total dos itens: ${reais(this.calcularTotalAPagar())}`);
        console.log(`Desconto: ${reais(this.calcularDesconto())}`);
        console.log(`Total a pagar: ${reais(this.calcularTotalAPagar() - this.calcularDesconto())}\n`);

    },
    imprimirDetalhes: function name() {
        console.log(`Cliente: ${this.nomeDoCliente}\n`);
        const sortProdutos = this.produtos.sort((a, b) => a.nome > b.nome && 1 || -1);
        let ordem = 1;
        for (const item of sortProdutos) {
            console.log(`Item ${ordem} - ${item.nome} - ${item.qtd} und - ${reais(item.precoUnit * item.qtd)} `);
            ordem++;
        }

        console.log(`\nValor total dos itens: ${reais(this.calcularTotalAPagar())}`);
        console.log(`Desconto: ${reais(this.calcularDesconto())}`);
        console.log(`Total a pagar: ${reais(this.calcularTotalAPagar() - this.calcularDesconto())}`);
    },
    addProdutoAoCarrinho: function (produto) {
        let adicionarNLista = true;
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].id === produto.id) {
                this.produtos[i].qtd += produto.qtd
                adicionarNLista = false;
            }
        }
        adicionarNLista ? this.produtos.push(produto) : 0;
    }
}

function reais(value) {
    return "R$ " + (value / 100).toFixed(2).replace(".", ",");
}

carrinho.imprimirResumoDoCarrinho();
const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}
carrinho.addProdutoAoCarrinho(novaBermuda);
carrinho.imprimirResumoDoCarrinho();

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}
carrinho.addProdutoAoCarrinho(novoTenis);
carrinho.imprimirResumoDoCarrinho();

carrinho.imprimirDetalhes();