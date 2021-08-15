console.clear();console.log(`Iniciando Script`);
const fs = require(`fs`)
const express = require(`express`);
const axios = require(`axios`);
const app = express();
app.use(express.json());
const port = 80;
const recurso = `revisao`;
app.listen(port);

const api = (callback) => { // function api() {}
    console.log(`Começou Requisição`);
    axios.get(`https://viacep.com.br/ws/17506380/json/`)
        // .then(x => console.log(x.data.localidade))
        // .then(x => callback(x.data.localidade))
    console.log(`terminou a função`);
};

// const data = api();
// console.log(data); // Problema, volta undefined

//callback
// api((cidade) => console.log(cidade));

// const p = new Promise((resolve, reject) => {
//     try {
//         setTimeout(() => resolve(["João", "Maria"]), 2000);
//     } catch (err) {
//         reject(err);
//     }
// });
// p.then(data => console.log(`Final1:`, data));
// p.then(data => data.push('Pedro'));
// p.then(data => console.log(`Final2:`, data));
// p.catch(x => console.log(`Deu erro no exemplo de promisse`, x));

//Função assincrôna que retorna promisses
const apiAsync = async (cep) => {
    console.log(`Começou Requisição`);
    const resp = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    const localidade = resp.data.localidade;
    console.log(`terminou`);
    return localidade;
};

// const p = apiAsync();
// p.then(x => console.log(x));

// apiAsync()
//     .then(x => console.log(x));

// const a = apiAsync(17506380);
// const b = apiAsync(18500000);
// const c = apiAsync(19500000);

// Promise.all([a,b,c]).then(result => {
//   console.log(result);
// })