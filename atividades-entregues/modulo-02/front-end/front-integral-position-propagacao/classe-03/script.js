const imagens = document.querySelectorAll('.imagens img');
const modal = document.querySelector('.modal');
const imgModal = document.querySelector('.modal img');
const linkModal = document.querySelector('.modal a');

imagens.forEach((x)=>{
    x.addEventListener('click', (e)=>{
        modal.classList.remove('escondido');
        imgModal.src = e.target.src;
    })
});

modal.addEventListener('click', ()=>{
    modal.classList.add('escondido');
});

imgModal.addEventListener('click', (e)=> {
    e.stopPropagation();
    linkModal.href = e.target.src;
});

linkModal.addEventListener('click', (e)=>{
    e.stopPropagation();
});
