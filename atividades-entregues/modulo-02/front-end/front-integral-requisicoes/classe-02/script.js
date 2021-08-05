const moeda = document.getElementById('moeda');
const maiorUnit = document.getElementById('maiorUnit');
const maiorOfer = document.getElementById('maiorOfer');

moeda.addEventListener('change', () => {
    if (!moeda.value) {
        maiorOfer.textContent = "R$ -";
        maiorUnit.textContent = "R$ -";
        return;
    }

    fetch(`https://www.mercadobitcoin.net/api/${moeda.value}/ticker/`)
        .then(x => x.json())
        .then(x => {
            maiorUnit.textContent = `R$ ${Number(x.ticker.high).toFixed(2)}`;
            maiorOfer.textContent = `R$ ${Number(x.ticker.buy).toFixed(2)}`;
        })
        .catch((err) => {
            console.log(err);
        });
})