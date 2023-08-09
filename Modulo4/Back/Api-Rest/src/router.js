const express = require('express');
const { listagem, obterInstrutor, cadastraInstrutor } = require('./controllers/instrutores');

const router = express();

router.get('/instrutores', listagem);
router.get('/instrutores/:id', obterInstrutor);
router.post('/instrutores', cadastraInstrutor);

module.exports = router;