// retorna o primeiro elemento do array que correponde a condição do callback

// const numeros = [1,2,3,4,5];

// const resultado = numeros.find((elemento) => {
//     return elemento > 2;
// });

// console.log(resultado);

const usuarios = [
    {
        nome:'bruna',
        idade: 25
    },
    {
        nome:'bruno',
        idade: 27
    },
    {
        nome:'fabio',
        idade: 23
    },
    {
        nome:'bea',
        idade: 20
    }
];

const resultado = usuarios.find((usuario) => {
    return usuario.nome ==='fabio';
});

console.log(resultado);