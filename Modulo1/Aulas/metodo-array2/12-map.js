//executa uma função callback passado como argumento para cada elemento do array e retorna um novo array

// const numeros = [1,3,5];

// const dobro = numeros.map((elemento) => {
//     return elemento * 2;
// });

// console.log(dobro);

const usuarios = [
    {
        nome:'bruna',
        sobrenome: 'fernandes',
        idade: 25
    },
    {
        nome:'bruno',
        sobrenome: 'jr',
        idade: 27
    },
    {
        nome:'fabio',
        sobrenome: 'matos',
        idade: 23
    },
    {
        nome:'bea',
        sobrenome: 'felix',
        idade: 20
    }
];

const novoArray = usuarios.map((elemento) => {
    return { nomeCompleto: `${elemento.nome} ${elemento.sobrenome}`, idade: elemento.idade}
});

console.log(novoArray);