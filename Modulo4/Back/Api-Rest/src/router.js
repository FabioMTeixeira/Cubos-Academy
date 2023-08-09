const express = require('express');
const { listagem } = require('./controllers/instrutores');

const router = express();

router.get('/instrutores', listagem);

module.exports = router;