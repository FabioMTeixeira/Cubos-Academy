const express = require('express');

const app = express();

const professores = [
    {
        id: 1,
        nome: 'fabio',
        stack: 'backend'
    },
    {
        id: 2,
        nome: 'dani',
        stack: 'frontend'
    },
    {
        id: 3,
        nome: 'guido',
        stack: 'backend'
    }
];

app.get('/professores', (req, res) => {
    let resultado = professores;
    const { nome } = req.query;

    if (nome) {
        resultado = professores.filter((professor) => {
            return professor.nome === nome;
        });
    }

    res.send(resultado);
});

app.get('/professores/:id', (req, res) => {
    const { id } = req.params;

    const professorEncontrado = professores.find((professor) => {
        return professor.id === Number(id);
    });

    res.send(professorEncontrado);
});

app.listen(3000, () => {
    console.log("servidor funcionando na porta 3000");
});