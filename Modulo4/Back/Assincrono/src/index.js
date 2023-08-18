const express = require('express');

const app = express();

app.get('/', async (req, res) => {
    res.send('tudo ok');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});