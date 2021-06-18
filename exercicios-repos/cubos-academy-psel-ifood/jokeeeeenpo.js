function solucao(joao, andre) {
    if (joao === andre) console.log("EMPATE");
    if (joao === "PAPEL" && andre === "TESOURA") console.log("ANDRE");
    if (joao === "PAPEL" && andre === "PEDRA") console.log("JOAO");
    if (joao === "PEDRA" && andre === "TESOURA") console.log("JOAO");
    if (joao === "PEDRA" && andre === "PAPEL") console.log("ANDRE");
    if (joao === "TESOURA" && andre === "PEDRA") console.log("ANDRE");
    if (joao === "TESOURA" && andre === "PAPEL") console.log("JOAO");
}