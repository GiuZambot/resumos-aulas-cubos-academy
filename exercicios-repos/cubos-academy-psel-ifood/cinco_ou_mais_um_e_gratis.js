function solucao(precos) {
    let total = 0;
    let clas = [];

    function compara(a, b) { return a - b; } //funcao para o sort

    for (let i of precos) { total += i; } //soma tudo

    if (precos.length > 4) {
        clas = precos.sort(compara); //coloquei aqui pra nem fazer se tiver menos de 5
        total = total - (clas[0]); // subtrai o valor do mais barato
    }
    console.log(total);
}