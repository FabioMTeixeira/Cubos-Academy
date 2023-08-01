const express = require('express');

const app = express();

const nomes = ['bruno', 'bruna', 'fernando', 'fernanda'];
let i = 0;

app.get('/', (req, res) => {
    if (i < nomes.length) {
        res.send(`Olaa primeiro servidor ${nomes[0 + i]}`);
        console.log(nomes.length);
        console.log(i);
        i++;
    } else {
        i = 0;
        res.send('Acabou');
    }
});

app.listen(3000);