function solucao(produtos) {
    const resp = {
        totalTop: 0,
        percentual: 0
    }

    let totalGeral = 0;

    for (item of produtos) {
        totalGeral += item.preco;
        if (item.preco >= 10000) {
            resp.totalTop += item.preco;
        }
    }

    resp.percentual = resp.totalTop / totalGeral;
    console.log(resp);
}