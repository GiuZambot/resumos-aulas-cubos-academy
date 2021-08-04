const galeria = document.querySelector('.galeria');
const imagens = [];
const btnMenu = document.querySelector('.btnMenu');
const header = document.querySelector('header');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal_img');
const modalPrev = document.querySelector('.modal_prev');
const modalNext = document.querySelector('.modal_next');
const modalLike = document.querySelector('.modal_like');
const modalFechar = document.querySelector('.modal_fechar');
const inicial = document.querySelector('.inicio');
const favoritos = document.querySelector('.favoritos');
const titulo = document.querySelector('.titulo');
let itens;

for (let i = 1; i < 11; i++) {
    imagens.push(`assets/gallery/image ${i}.png`);

    const div = document.createElement("div");
    div.className = `item${i}`;
    const img = document.createElement("img");
    img.src = `./assets/gallery/image ${i}.png`;
    img.alt = "Item da galeria";
    img.addEventListener('click', (event) => {
        if (i == 1)
            modalPrev.classList.add('hidden');
        if (i == 10)
            modalNext.classList.add('hidden');

        modalImg.src = event.target.src;
        modal.classList.remove('hidden');
    });
    div.append(img);

    const coracao = document.createElement("img");
    coracao.src = `./assets/like.svg`;
    coracao.className = `like image${i - 1} hidden`;
    div.append(coracao);

    const info = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.textContent = "Loren ipsum";
    info.append(h2);

    const p = document.createElement("p");
    p.textContent = "há um mês";
    info.append(p);

    div.append(info);

    galeria.append(div);
}

btnMenu.addEventListener('click', () => {
    btnMenu.src = header.classList.contains('header_aberto') ? "./assets/closed-menu.svg" : "./assets/open-menu.svg";
    header.classList.toggle('header_aberto');
});

modalFechar.addEventListener('click', () => {
    modal.classList.add('hidden');
    modalPrev.classList.remove('hidden');
    modalNext.classList.remove('hidden');
});

modalPrev.addEventListener('click', navegar);
modalNext.addEventListener('click', navegar);

function navegar(e) {
    let index = imagens.findIndex(i => decodeURI(modalImg.src).includes(i));
    e.target.className === "modal_prev" ? index-- : index++;

    if (index === 0) {
        modalPrev.classList.add('hidden');
    } else if (index === 9) {
        modalNext.classList.add('hidden');
    } else {
        modalPrev.classList.remove('hidden');
        modalNext.classList.remove('hidden');
    }

    modalImg.src = imagens[index];


    galeria.querySelector(`.image${index}`).classList.contains("hidden") ? modalLike.classList.add('hidden') : modalLike.classList.remove('hidden');
}

modalImg.addEventListener('dblclick', (event) => {
    const index = imagens.findIndex(i => decodeURI(modalImg.src).includes(i));
    if (modalLike.classList.contains("hidden")) {
        modalLike.classList.remove('hidden');
        galeria.querySelector(`.image${index}`).classList.remove('hidden');
    } else {
        modalLike.classList.add('hidden');
        galeria.querySelector(`.image${index}`).classList.add('hidden');
    };
    if (titulo.textContent === "Favoritos")
            favoritos.click();
});

favoritos.addEventListener('click', () => {
    titulo.textContent = "Favoritos";
    favoritos.querySelector(`img`).src = "./assets/active-like.svg";
    inicial.querySelector(`img`).src = "./assets/inactive-home.svg";
    for (let i = 1; i < 11; i++) {
        if (galeria.querySelector(`.image${i - 1}`).classList.contains("hidden")) {
            galeria.querySelector(`.item${i}`).classList.add('hidden');
        } else {
            galeria.querySelector(`.item${i}`).classList.remove('hidden');
        } 
    }
});

inicial.addEventListener('click', () => {
    titulo.textContent = "Inicial";
    favoritos.querySelector(`img`).src = "./assets/inactive-like.svg";
    inicial.querySelector(`img`).src = "./assets/active-home.svg";
    for (let i = 1; i < 11; i++) {
        galeria.querySelector(`.item${i}`).classList.remove('hidden');
    }
});