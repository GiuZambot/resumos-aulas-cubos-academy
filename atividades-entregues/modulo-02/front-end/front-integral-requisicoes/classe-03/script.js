const id = document.getElementById('nome');
const buscar = document.getElementById('buscar');
const imagem = document.getElementById('imagem');
const habilidades = document.getElementById('habilidades');

buscar.addEventListener('click', () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id.value}/`)
        .then(x => x.json())
        .then(x => {
            console.log(x.abilities);
            imagem.src = x.sprites.front_default;
            x.abilities.forEach(element => {
                habilidades.innerHTML += `<p>${element.ability.name}</p>`
            });
        })
        .catch((err) => {
            console.log(err);
        });
})