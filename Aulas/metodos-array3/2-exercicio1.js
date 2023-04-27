const usuarios = [
    {
        id: 11,
        nome: 'joao',
        idade: 23
    },
    {
        id: 2,
        nome: 'pedro',
        idade: 18
    },
    {
        id: 4,
        nome: 'maria',
        idade: 30
    },
    {
        id: 123,
        nome: 'fabio',
        idade: 26
    }
];

usuarios.sort((a, b) => {
    return a.id - b.id;
});

console.log(usuarios);

usuarios.sort((a, b) => {
    return b.id - a.id;
});

console.log(usuarios);