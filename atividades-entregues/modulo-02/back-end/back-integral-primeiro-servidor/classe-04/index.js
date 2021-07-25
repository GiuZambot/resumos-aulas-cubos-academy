const express = require('express');
const app = express();
const port = 3000;

app.get('/somar', (req, res) => {
    if (isNaN(Number(req.query.num1)) || isNaN(Number(req.query.num2))) {
        res.send(`Termos não são números`);
        return;
    }
    const result = Number(req.query.num1) + Number(req.query.num2);
    res.send(`${result}`);
});

app.get('/subtrair', (req, res) => {
    if (isNaN(Number(req.query.num1)) || isNaN(Number(req.query.num2))) {
        res.send(`Termos não são números`);
        return;
    }
    const result = Number(req.query.num1) - Number(req.query.num2);
    res.send(`${result}`);
});

app.get('/multiplicar', (req, res) => {
    if (isNaN(Number(req.query.num1)) || isNaN(Number(req.query.num2))) {
        res.send(`Termos não são números`);
        return;
    }
    const result = Number(req.query.num1) * Number(req.query.num2);
    res.send(`${result}`);
});

app.get('/dividir', (req, res) => {
    if (isNaN(Number(req.query.num1)) || isNaN(Number(req.query.num2))) {
        res.send(`Termos não são números`);
        return;
    }
    const result = Number(req.query.num1) / Number(req.query.num2);
    res.send(`${result}`);
});

app.listen(port, () => console.log(`Example app listening on port port!`));