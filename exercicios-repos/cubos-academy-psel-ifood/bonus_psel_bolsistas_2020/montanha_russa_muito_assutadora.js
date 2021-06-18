function solucao(listaDePessoas) {
    let paga = 0;
    let meia = 0;
    let total = 0;

    for (let i of listaDePessoas) {
        if (i.idade >= 12 && i.idade < 65 && !i.possuiPatologiaCardiaca && i.alturaEmCm >= 150) {
            if (i.ehEstudante) {
                meia++;
            } else {
                if (i.idade < 18) { meia++; } else { paga++; }
            }
        }
    }
    total = (paga * 20) + (meia * 10);
    console.log(total);


}