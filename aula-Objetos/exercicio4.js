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

let totalPago = 0; 

for (const produto of produtosConsumidos) {
    totalPago += produto.precoUnitario * produto.quantidadeComprada;
}

totalPago = (totalPago/100).toFixed(2);

console.log(`Voce deve pagar R$${totalPago}`);