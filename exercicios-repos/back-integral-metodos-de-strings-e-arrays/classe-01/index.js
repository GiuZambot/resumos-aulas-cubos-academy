const comentario = "Esse COVID é muito perigoso!";
const arr = comentario.toLowerCase().split(" ");

const proibidos = ["covid", "pandemia"]

if (arr.some(elem => proibidos.includes(elem))) {
    console.log("Comentário bloqueado por conter palavras proibidas");
} else {
    console.log("Comentário autorizado.");
}