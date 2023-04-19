const pessoa = {
    nome: 'Jose',
    idade: 20,
    cidade: 'Salvador',
    profissao: 'dev'
};

const endereco = {
    rua: 'aqui',
    numero: '32',
    bairro: 'bairro legal'
};

const objetoFundido = {
    ...pessoa,
    ...endereco
};

console.log(objetoFundido);