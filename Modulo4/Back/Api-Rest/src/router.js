const express = require('express');
const { listagem, obterInstrutor } = require('./controllers/instrutores');

const router = express();

router.get('/instrutores', listagem);
router.get('/instrutores/:id', obterInstrutor);

module.exports = router;