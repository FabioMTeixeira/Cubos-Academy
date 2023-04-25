// retorna o indice do primeiro elelemento do array que corresponde a função callback e se nao encontra retorna -1

// const numeros = [1,2,3,4,5];

// const resultado = numeros.findIndex((numero) => {
//     return numero === 2;
// });

// console.log(resultado);

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

const resultado = carros.findIndex((carro) => {
    return carro.nome === 'ranger';
});

console.log(resultado);