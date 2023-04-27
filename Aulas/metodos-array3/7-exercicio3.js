const usuarios = [
    {
        id: 11,
        nome: 'joao',
        idade: 23
    },
    {
        id: 2,
        nome: 'maria',
        idade: 27
    },
    {
        id: 1,
        nome: 'rodrigo',
        idade: 17
    },
    {
        id: 123,
        nome: 'jack',
        idade: 25
    }
];

const maiorIdade = usuarios.reduce((acumulador, valorAtual, indice, array) => {
    let maior = acumulador;

    if (valorAtual.idade > maior.idade) {
        maior = valorAtual;
    };

    return maior;
});

console.log(maiorIdade);