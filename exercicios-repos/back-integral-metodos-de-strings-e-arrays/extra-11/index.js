const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function carros(arr, pos) {
    const result = arr.slice(pos, 6);
    console.log(result.join(" - "));
}

carros(nomes, posicao);