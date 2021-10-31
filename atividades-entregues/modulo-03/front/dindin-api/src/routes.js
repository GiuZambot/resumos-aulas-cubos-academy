const { Router } = require("express");
const TransactionsController = require("./controllers/TransactionsController");

const routes = Router();

routes.get("/", (request, response) => {
    response.sendFile(`${__dirname}/build/index.html`);
});
routes.get('/transactions', TransactionsController.listAll);
routes.post('/transactions', TransactionsController.create);
routes.delete('/transactions/:id', TransactionsController.delete);
routes.put('/transactions/:id', TransactionsController.update);
routes.patch('/transactions/:id', TransactionsController.updateOnePropertie);
routes.get('/transactions/:id', TransactionsController.detailOne);

module.exports = routes;