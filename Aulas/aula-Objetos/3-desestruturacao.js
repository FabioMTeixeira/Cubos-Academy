const pessoa = {
    nome: 'Jose',
    idade: 20,
    cidade: 'Salvador',
    profissao: 'dev'
};

const { nome, ...outros } = pessoa;

console.log(nome);
console.log(outros); //faz outro objeto com o que não foi usado na desestruturação