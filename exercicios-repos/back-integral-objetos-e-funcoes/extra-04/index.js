// Movimentação de uma conta bancária

const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        this.saldo += valor;
        this.historicos.push({ tipo: "Depósito", valor: valor });
        return `Deposito de ${reais(valor)} realizado para o(a) cliente ${this.nome}.`;
    },
    sacar: function (valor) {
        let msg = "";
        valor > this.saldo ? (
            msg = `Saldo insuficiente para o saque de: ${this.nome}.`
        ) : (
            this.saldo -= valor,
            this.historicos.push({ tipo: "Saque", valor: valor }),
            msg = `Saque de ${reais(valor)} realizado para o(a) cliente ${this.nome}.`
        )
        return msg;
    },
    extrato: function () {
        let extrato = `Extrato de ${this.nome} - Saldo: ${reais(this.saldo)}\nHistóricos:\n`;
        for (const hist of this.historicos) {
            extrato += `${hist.tipo} de ${reais(hist.valor)}\n`;
        }
        return extrato;
    }
}

function reais(value) {
    return "R$ " + (value / 100).toFixed(2).replace(".", ",");
}

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());