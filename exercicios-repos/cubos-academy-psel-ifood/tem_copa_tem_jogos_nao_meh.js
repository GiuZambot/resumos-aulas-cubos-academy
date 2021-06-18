function solucao(ano) {
    let restoC = (2014 - ano) % 4; //base 2014
    let restoO = (2016 - ano) % 4; //base 2016
    let resp = "";

    if (restoC === 0) {
        resp = "COPA";
    } else if (restoO === 0) {
        resp = "JOGOS";
    } else {
        resp = "MEH";
    }
    console.log(resp);
}