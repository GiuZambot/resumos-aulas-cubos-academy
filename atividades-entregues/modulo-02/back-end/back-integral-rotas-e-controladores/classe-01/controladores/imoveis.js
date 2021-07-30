const {imoveis} = require('../dados/imoveis');

function get(req, res) {
    res.json(imoveis);
};

function getPorId(req, res) {
    const id = Number(req.params.id);
    const imovel = imoveis.find(l => id === l.id);
    resp = imovel ? imovel : { mensagem: "Não existe imovel para o ID informado." };
    res.json(resp);
};

module.exports = {get, getPorId};