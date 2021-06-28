const fs = require('fs');

const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho'];

fs.writeFile("meuarquivo.txt", "Estou aprendendo JavaScript na Cubos Academy", () => {
    console.log("Arquivo salvo.");
});