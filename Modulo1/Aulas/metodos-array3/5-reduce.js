//executa a função callback para cada elemento do array e resulta apenas em um valor de retorno

const array = [0,1,2,3,4];

const resultado = array.reduce((acumulador, valorAtual, indice, array) => {
    return acumulador + valorAtual
}, 10); // esse 10 vira o valor inicial, que é o acumulador

console.log(resultado);