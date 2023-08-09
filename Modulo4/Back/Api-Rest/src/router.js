const express = require('express');
const { listagem, obterInstrutor, cadastraInstrutor, atualizarInstrutor } = require('./controllers/instrutores');

const router = express();

router.get('/instrutores', listagem);
router.get('/instrutores/:id', obterInstrutor);
router.post('/instrutores', cadastraInstrutor);
router.put('/instrutores/:id', atualizarInstrutor);

module.exports = router;