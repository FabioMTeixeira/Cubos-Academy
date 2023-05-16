//testa todos os elementos do array implementando a função callback retornando true or false

// const numeros = [1,2,3,4];

// console.log(numeros.every((elementoAtual) => {
//     return elementoAtual < 5
// }));

const frutas = ['abacaxi', 'manga', 'melancia'];

const resultado = frutas.every((elementoAtual) => {
    return elementoAtual !=='banana';
});

console.log(resultado);

