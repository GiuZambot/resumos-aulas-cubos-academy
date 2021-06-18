function solucao(precos) {
    let total = 0;
    let clas = [];

    function compara(a, b) { return a - b; }

    for (let i of precos) { total += i; }

    if (precos.length > 2) {
        clas = precos.sort(compara);
        total = total - (clas[0] / 2);
    }
    console.log(total);
}