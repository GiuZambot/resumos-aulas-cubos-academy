const express = require('express');
const axios = require('axios');
const app = express();
const port = 80;

app.use(express.json());

app.get('/', getListaPok);
app.get('/:idOuNome', getPok);

async function getListaPok(req,res){
    const resp = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=3');
    res.json(resp.data.results);
}

async function getPok(req,res){
    const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.idOuNome}`);
    const {id, name, height, weight, base_experience, forms, abilities, species } = resp.data;
    res.json({id, name, height, weight, base_experience, forms, abilities, species});
}

app.listen(port);