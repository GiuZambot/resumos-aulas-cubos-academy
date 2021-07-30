const express = require('express');
const {get, getPorId, post, put, patch, deleta} = require('./controladores/alunos');
const router = express();

router.get('/alunos', get);
router.get('/alunos/:id', getPorId);
router.post('/alunos', post);
router.put('/alunos/:id', put);
router.patch('/alunos/:id', patch);
router.delete('/alunos/:id', deleta);

module.exports = router;