const fs = require('fs')
const express = require('express');
const axios = require('axios');
const app = express();
const port = 80;

app.use(express.json());

app.get('/enderecos/:CEP', getCEP);

async function getCEP(req,res){
    console.log("chamou");
    fs.readFile('enderecos.json', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            const obj = JSON.parse(data);
            const achado = obj.find(e => req.params.CEP === e.cep.replace("-", ""));
            if (achado){
                res.json(achado);
            } else {
                axios.get(`https://viacep.com.br/ws/${req.params.CEP}/json/`)
                    .then(x => {
                        const data = x.data;
                        obj.push(data);
                        fs.writeFile('enderecos.json', JSON.stringify(obj), (err) => {
                            if (err) 
                                console.log(err);
                        });
                        res.json(obj);
                    });
            };
        };
    });
}

// para enviar um teste 
axios.get(`http://localhost/enderecos/17506370`).then(x => console.log(x.data));

app.listen(port, () => console.log("Escutando"));