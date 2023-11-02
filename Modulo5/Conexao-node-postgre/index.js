const express = require('express');
const pool = require('./conexao');

const app = express();

app.use(express.json());

// app.get('/', async (req, res) => {
//     try {
//         const resultado = await pool.query('select * from empresas');

//         return res.status(200).json(resultado);
//     } catch (error) {
//         console.log(error.message);
//     };
// });

app.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const query = 'select * from empresas where id = $1';
        const params = [id];

        const resultado = await pool.query(query, params);

        return res.status(200).json(resultado);
    } catch (error) {
        console.log(error.message);
    };
});

app.get('/999', async (req, res) => {
    const { pagina, porPagina } = req.query;
    try {

        const paginaAtual = pagina === 1 ? 0 : (pagina - 1) * porPagina;
        const query = 'select * from pessoas order by id asc limit $1 offset $2';
        const params = [porPagina, paginaAtual];

        const resultado = await pool.query(query, params);

        return res.status(200).json(resultado);
    } catch (error) {
        console.log(error.message);
    };
});

app.listen(3000, () => {
    console.log('Esta rodando na porta 3000');
});