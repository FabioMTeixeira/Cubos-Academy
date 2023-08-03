const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log(req);
    res.send('bora');
});

app.listen(3000, () => {
    console.log("servidor funcionando na porta 3000");
});