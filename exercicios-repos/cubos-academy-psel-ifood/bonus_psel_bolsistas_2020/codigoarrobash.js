function solucao(textoCodificado) {
    const dicionanio = {
        "###": "C",
        "##@": "U",
        "#@#": "B",
        "#@@": "A",
        "@##": "D",
        "@#@": "E",
        "@@#": "M",
        "@@@": "Y"
    }

    let resp = "";
    for (i = 0; i < textoCodificado.length; i += 3) {
        const letra = textoCodificado[i] + textoCodificado[i + 1] + textoCodificado[i + 2];
        resp += dicionanio[letra];
    }
    console.log(resp);

}