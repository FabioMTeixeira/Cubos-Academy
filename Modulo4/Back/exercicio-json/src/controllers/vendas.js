const produtos = require('../bancadedados');
const fs = require('fs/promises');

const listagemProdutos = async (req, res) => {
    return res.status(200).json(produtos);
};

const vendas = async (req, res) => {
    const { produto_id, quantidade } = req.body;

    const produtoEncontrado = produtos.find((produto) => {
        return produto.id === Number(produto_id);
    });

    if (!produtoEncontrado) {
        return res.status(404).json({ mensagem: 'Produto não encontrado' });
    }

    try {
        const vendas = await fs.readFile('./src/vendas.json');

        const parseVendas = JSON.parse(vendas);

        parseVendas.vendas.psuh({
            produto: produtoEncontrado,
            quantidade
        });

        await fs.writeFile('./src/vendas.json', JSON.stringify(parseVendas));

        return res.status(201).json({ mensagem: 'Vendas registrada com sucesso' });
    } catch (erro) {
        return res.status(500).json({ mensagem: 'Erro do servidor' });
    }
};

module.exports = {
    listagemProdutos,
    vendas
};