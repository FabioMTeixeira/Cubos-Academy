const carros = [
    {
        nome: 'corola',
        marca: 'toyota',
        ano: 2010,
        cor: 'prata'
    },
    {
        nome: 'argo',
        marca: 'fiat',
        ano: 2021,
        cor: 'preto'
    },
    {
        nome: 'ranger',
        marca: 'ford',
        ano: 2021,
        cor: 'prata'
    },
];

const buscarCarro = (marca, arrayCarros) => {
    const resultado = arrayCarros.find((carro) => {
        return carro.marca === marca;
    });

    console.log(resultado);
};

buscarCarro('toyota', carros);