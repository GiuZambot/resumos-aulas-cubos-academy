const notas = [6, 20, 33, 454, 8, 9, 9, 6, 8, 9, 20, 20, 33];

// Só aparece uma vez
const notasUni = [];
notas.forEach(x => {
    !notasUni.find(y => y === x) ? notasUni.push(x) : false;
});

console.log(notasUni);

// achando quem não se repete
const naoRepete = notas.filter(x => notas.filter(y => y == x).length === 1);

console.log(naoRepete);