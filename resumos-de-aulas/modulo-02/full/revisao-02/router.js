const express = require('express');
const {get, getById, post, put, patch, deleta} = require('./controllers/alunos');
const router = express();

router.get("/", (request, response) => {
    response.sendFile(__dirname + "/front/index.html");
});
router.get('/alunos', get);
router.get('/alunos/:id', getById);
router.post('/alunos', post);
router.put('/alunos/:id', put);
router.patch('/alunos/:id', patch);
router.delete('/alunos/:id', deleta);

module.exports = router;