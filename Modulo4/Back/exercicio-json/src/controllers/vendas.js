const produtos = require('../bancadedados');

const listagemProdutos = async (req, res) => {
    return res.status(200).json(produtos);
};

const vendas = async (req, res) => {

};

module.exports = {
    listagemProdutos,
    vendas
};