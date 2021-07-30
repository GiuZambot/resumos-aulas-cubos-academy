const form = document.querySelector('form');
const select = document.querySelector('#generos')
const escolher = document.querySelector('#esc')
const q = document.querySelector('#q');
const musicas = [
    {
        genero:'metal',
        nome: 'Run To The Hills - Iron Maiden'
    },
    {
        genero:'metal',
        nome: 'The Unforgiven - Metallica' 
    },
    {
        genero:'metal',
        nome: 'Rebirth - Angra' 
    },
    {
        genero:'rock',
        nome: 'We Will Rock' 
    },
    {
        genero:'rock',
        nome: 'Smells Like Teen Spirit' 
    },
    {
        genero:'rock',
        nome: 'Stairway To Heaven' 
    },
    {
        genero:'sertanejo',
        nome: 'Morena - Luan Santana' 
    },
    {
        genero:'sertanejo',
        nome: 'Ficha Limpa - Gusttavo Lima.' 
    },
    {
        genero:'sertanejo',
        nome: 'Agonia - Mari Fernandez' 
    },
]

form.addEventListener('submit',(e)=>{
    const selecao = musicas.filter(m=>m.genero===select.value);
    const i = Math.floor(Math.random() * selecao.length);
    q.value = selecao[i].nome;
});