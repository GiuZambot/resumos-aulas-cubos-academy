function solucao(numeros) {
    let soma = 0;
    let resto = 0;
    for (i of numeros) {
        soma += i;
    }
    resto = soma % numeros.length;
    if (resto === 0) { console.log(numeros.length); } else { console.log(resto); }
}