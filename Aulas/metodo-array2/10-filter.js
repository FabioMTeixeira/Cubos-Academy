// cria um novo array com todos os elementos que tera todas as respostas da funçao callback

const numeros = [1,2,3,4,5];

const resultado = numeros.filter((numero) => {
    return numero > 2;
});

console.log(resultado);