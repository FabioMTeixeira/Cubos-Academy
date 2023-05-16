const array = [
    [0,1],
    [2,3,4],
    [14,22,98]
];

const resultado = array.reduce((acumulador, valorAtual, indice, array) => {
    return [...acumulador, ...valorAtual]
});

console.log(resultado);