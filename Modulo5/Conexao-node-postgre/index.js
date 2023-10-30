const express = require('express');
const { Pool } = require('pg');



const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.json('Tudo certo!');
});

app.listen(3000, () => {
    console.log('Esta rodando na porta 3000');
});