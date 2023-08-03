const express = require('express');
const { filtrarProfessores, encontrarUmProfessor } = require('./controllers/professores');

const app = express();

app.get('/professores', filtrarProfessores);

app.get('/professores/:id', encontrarUmProfessor);

app.listen(3000, () => {
    console.log("servidor funcionando na porta 3000");
});