const express = require('express');
const { filtrarProfessores, encontrarUmProfessor } = require('./controllers/professores');

const app = express();

const intermediarioDaRota = () => {
    console.log('passei pelo middleware da rota');
    next();
};

app.use((req, res, next) => {
    console.log('passei no 1 intermediario');
    next();
});

app.get('/professores', intermediarioDaRota, filtrarProfessores);

app.get('/professores/:id', encontrarUmProfessor);

app.listen(3000, () => {
    console.log("servidor funcionando na porta 3000");
});