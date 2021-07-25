INPUTS = document.querySelectorAll('input');

INPUTS.forEach(e => {
    e.addEventListener('change', (event) => {
        const el = eval(document.querySelector("label[for='" + event.target.id + "']").textContent.split(":")[0]);
        if (el == event.target.value)
            event.target.classList.add("acerto");
        else
            event.target.classList.remove("acerto");
    });
});
