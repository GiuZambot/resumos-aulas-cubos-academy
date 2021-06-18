function solucao(j, a) {
    if (j === a) console.log("EMPATE");
    if (j === "PAPEL" && a === "TESOURA") console.log("ANDRE");
    if (j === "PAPEL" && a === "PEDRA") console.log("JOAO");
    if (j === "PEDRA" && a === "TESOURA") console.log("JOAO");
    if (j === "PEDRA" && a === "PAPEL") console.log("ANDRE");
    if (j === "TESOURA" && a === "PEDRA") console.log("ANDRE");
    if (j === "TESOURA" && a === "PAPEL") console.log("JOAO");
}