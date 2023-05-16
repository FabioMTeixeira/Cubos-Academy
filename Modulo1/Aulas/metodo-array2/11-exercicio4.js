const professores = [
    {
        nome: 'augusto',
        stack: 'backend'
    },
    {
        nome: 'fabio',
        stack: 'backend'
    },
    {
        nome: 'bruno',
        stack: 'frontend'
    },
    {
        nome: 'josé',
        stack: 'frontend'
    },
];

const filtrarStacks = (array, stack) => {
    const resultado = array.filter((elemento) => {
        return elemento.stack === stack;
    });

    console.log(resultado);
};

filtrarStacks(professores, 'backend');
filtrarStacks(professores, 'frontend');