const { instrutores } = require('../bancoDeDados');

const listagem = (req, res) => {
    return res.json(instrutores);
};

const obterInstrutor = (req, res) => {
    const { id } = req.params;

    const encontrarInstrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id);
    });

    if (!encontrarInstrutor) {
        return res.status(404).json({ mensagem: 'Instrutor não encontrado' });
    }

    return res.status(200).json(encontrarInstrutor);
};

module.exports = {
    listagem,
    obterInstrutor
};