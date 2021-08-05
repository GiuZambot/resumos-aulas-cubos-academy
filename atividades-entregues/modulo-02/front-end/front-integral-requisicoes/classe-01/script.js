const cep = document.getElementById('cep');
const cidade = document.getElementById('cidade');
const rua = document.getElementById('rua');

cep.addEventListener('change', () => {
    if (cep.value.length !== 8) {
        console.log("O CEP informado não é compatível, seu cabeção!");
        return;
    }


    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
        .then(x => x.json())
        .then(x => {
            if (x.erro) {
                console.log("CEP informado nem existe maconheiro(a), tente algo no planeta Terra.");
                return;
            }
            cidade.value = x.localidade;
            rua.value = x.logradouro;
        })
        .catch((err) => {
            console.log(err);
        });
})