const fs = require('fs')
const express = require('express');
const axios = require('axios');
const app = express();
const port = 80;

app.use(express.json());

//https://companyenrichment.abstractapi.com/v1/?api_key=563802fa16804cd38b9e0898ebb66900&domain=airbnb.com

app.get('/enderecos/:cep', getCEP);
app.get('/:uf/:local/:logra', getEnder);

function getCEP(req, res) {
    console.log("chamou por CEP");
    fs.readFile('enderecos.json', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log("lido arquivo com sucesso, por CEP");
            const obj = JSON.parse(data); // convertendo conteúdo texto para objeto js
            const achado = obj.find(e => req.params.cep === e.cep.replace("-", ""));
            if (achado) {
                console.log("Achado CEP no arquivo");
                res.json(achado);
            } else {
                console.log("Não achou no arquivo, requisição por viaCEP");
                axios.get(`https://viacep.com.br/ws/${req.params.cep}/json/`)
                    .then(x => {
                        const data = x.data;
                        obj.push(data);
                        console.log("Gravando novo CEP no arquivo");
                        fs.writeFile('enderecos.json', JSON.stringify(obj), (err) => {
                            if (err)
                                console.log(err);
                        });
                        res.json(data);
                    });
            };
        };
    });
};

function getEnder(req, res) {
    console.log("Chamou por Rua");
    fs.readFile('enderecos.json', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            const obj = JSON.parse(data);
            const achado = obj.find(e => e.logradouro.includes(req.params.logra.replace('+', ' ')));
            if (achado) {
                console.log("Achado por Rua");
                res.json(achado);
            } else {
                console.log("Não achado, fazendo requisição por Rua");
                const url = `https://viacep.com.br/ws/${req.params.uf}/${req.params.local}/${req.params.logra}/json/`;

                axios.get(url)
                    .then(x => {
                        const data = x.data[0];
                        obj.push(data);
                        fs.writeFile('enderecos.json', JSON.stringify(obj), (err) => {
                            if (err) console.log(err);
                        });
                        res.json(data);
                    });
            };
        };
    });
};

// para enviar um teste 
axios.get(`http://localhost/enderecos/17506370`).then(x => console.log(x.data));
axios.get(`http://localhost/SP/Marilia/Francisco Pinheiro Silveira`).then(x => console.log(x.data));

app.listen(port, () => console.log("Escutando"));