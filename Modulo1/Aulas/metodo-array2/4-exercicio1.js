const galeraDaFesta = [
    {
        nome: 'Bruno',
        idade: 24
    },
    {
        nome: 'Bruna',
        idade: 26
    },
    {
        nome: 'Breno',
        idade: 27
    },
    {
        nome: 'Fabio',
        idade: 15
    }
];

const fiscalizarFesta = (arrayObjetos) => {
    const resultado = arrayObjetos.every((objeto) => {
        return objeto.idade > 17;
    });
    resultado ? console.log('Partiu festa!!') : console.log('Tem menor de idade');
};

fiscalizarFesta(galeraDaFesta);