const produtos = [
    {
        nome: 'arroz',
        preco: 500
    },
    {
        nome: 'carne',
        preco: 3200
    },
    {
        nome: 'bolacha',
        preco: 450
    },
    {
        nome: 'banana',
        preco: 320
    },
];

const produtosComDesconto = produtos.map((produto) => {
    const desconto = produto.preco * 0.1;
    return {nome: produto.nome,
            preco: produto.preco,
            desconto: desconto}
});

console.log(produtosComDesconto);