// testa se ao menos um dos elementos do array passar pelo teste da função callback e retorna um boolean

const letras = ['a', 'b', 'c'];

const resulado = letras.some((elemento) => {
    return elemento === 'c';
});

console.log(resulado);