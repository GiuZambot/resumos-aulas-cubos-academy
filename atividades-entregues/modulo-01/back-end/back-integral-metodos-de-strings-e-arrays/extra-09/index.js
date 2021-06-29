const nomes = ['Juninho', 'Léo', 'Guido', 'Dina', 'Vitinho', 'Nanda'];
const tamanhoDoGrupo = 4;

function separaGrupo(arr, tamanho) {
    let grupo = [];
    while (arr.length > tamanho) {
        grupo = arr.splice(0, tamanho);
        console.log(grupo.join(", ") + ".");
    }
    console.log(arr.join(", ") + ".");
}

separaGrupo(nomes, tamanhoDoGrupo);