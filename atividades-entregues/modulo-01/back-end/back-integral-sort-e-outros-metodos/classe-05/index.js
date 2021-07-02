const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

const proibido = ["cerveja", "vodka"];

const teste = palavras.some(x => proibido.includes(x));

teste ? console.log("revise sua lista, joão. possui bebida com venda proibida!") : console.log("tudo certo, vamos as compras!");