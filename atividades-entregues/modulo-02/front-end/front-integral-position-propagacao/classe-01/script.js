document.querySelector('.senha img').addEventListener('click', () => {
    const x = document.querySelector(".senhaInput");
    if (x.type === "password") {
        x.type = "text";
        document.querySelector('.senha img').src = "./assets/olho-aberto.svg";
    } else {
        x.type = "password";
        document.querySelector('.senha img').src = "./assets/olho-fechado.svg";
    }
})