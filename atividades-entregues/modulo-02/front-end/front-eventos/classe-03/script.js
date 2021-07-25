const BTN = document.querySelector(".btn");
const MODAL = document.querySelector('.modal');
const CONFIRMAR = document.querySelector('.confirmar');
const CANCELAR = document.querySelector('.cancelar');

CONFIRMAR.addEventListener('click', () => {
    inscrito('remove');
    inicial();
    fecharModal();
});

CANCELAR.addEventListener('click', () => {
    BTN.addEventListener('click', () => {
        MODAL.classList.remove('escondido');
    }, { once: true });
    fecharModal()
});

function inicial() {
    BTN.addEventListener("click", () => {
        inscrito('add');
        BTN.addEventListener('click', () => {
            console.log('remover?');
            MODAL.classList.remove('escondido');
        }, { once: true });
    }, { once: true });
}

function inscrito(command) {
    command === "add" ? (
        BTN.textContent = "INSCRITO",
        BTN.classList.add('inscrito')
    ) : (
        BTN.textContent = "INSCREVER-SE",
        BTN.classList.remove('inscrito')
    )
}

function fecharModal() {
    MODAL.classList.add('escondido');
}

window.onload = inicial;