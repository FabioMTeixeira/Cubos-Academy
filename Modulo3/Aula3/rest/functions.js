// function soma (n1, n2, n3) {
//     return n1 + n2 + n3;
// }

// console.log(soma(1, 2, 3));

function soma (...args) {
    const somaNumeros = args.reduce((acum, val) => acum + val);

    return somaNumeros
}

console.log(soma(1, 2, 3, 5, 4, 2));