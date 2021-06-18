function solucao(obj) {
    if (obj.idade >= obj.censura || obj.estaComPais) {
        if (obj.temIngresso) {
            if (obj.idade < 18 || obj.temCarteirinha) {
                console.log("MEIA");
            } else {
                console.log("INTEIRA");
            }
        } else { //sem ingresso
            console.log("ACESSO NEGADO")
        }
    } else { //nao tem idade
        console.log("ACESSO NEGADO");
    }
}