const produtosConsumidos = [
    {
        nome: 'bolacha',
        precoUnitario: 400 ,
        quantidadeComprada: 4
    },
    {
        nome: 'salgadinho',
        precoUnitario: 350 ,
        quantidadeComprada: 10
    },
    {
        nome: 'cerveja',
        precoUnitario: 1000 ,
        quantidadeComprada: 6
    }
]
const consumoDoCliente = {
    nome: 'Roberto',
    idade: 41,
    produtosConsumidos
};

console.log(consumoDoCliente.nome);
console.log(consumoDoCliente.idade);
consumoDoCliente.idade = 46;
console.log(consumoDoCliente.idade);
console.log(consumoDoCliente.produtosConsumidos[0].nome);
console.log(consumoDoCliente.produtosConsumidos[produtosConsumidos.length - 1].precoUnitario);
