const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const frutasModif = frutas.map((x, i) => x = `${i} - ${x.charAt(0).toUpperCase() + x.toLowerCase().substr(1)}`);

console.log(frutasModif);