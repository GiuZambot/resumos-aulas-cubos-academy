FRUTAS = document.querySelectorAll('li');

document.querySelector('input').addEventListener('keyup', (event) => {
    if (event.code !== 'Enter')
        return;


    FRUTAS.forEach(e => {
        e.classList.remove('escondido');
        if (e.textContent !== event.target.value && event.target.value)
            e.classList.add('escondido');
    });

    event.target.value = '';

})