const express = require('express');
const { listagemProdutos, vendas } = require('./controllers/vendas');

const app = express();

app.use(express.json());

app.get('/produtos', listagemProdutos);
app.post('/produtos', vendas);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});