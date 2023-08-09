const { instrutores } = require('../bancoDeDados');
let { identificadorInstrutor } = require('../bancoDeDados');

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

const cadastraInstrutor = (req, res) => {
    const { nome, email, status } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: 'o nome é obrigatório' });
    }

    if (!email) {
        return res.status(400).json({ mensagem: 'o email é obrigatório' });
    }

    const instrutor = {
        id: identificadorInstrutor++,
        nome,
        email,
        status: status ?? true
    };

    instrutores.push(instrutor);

    return res.status(201).json(instrutor);
};

const atualizarInstrutor = (req, res) => {
    const { id } = req.params;
    const { nome, email, status } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: 'o nome é obrigatório' });
    }

    if (!email) {
        return res.status(400).json({ mensagem: 'o email é obrigatório' });
    }

    const encontrarInstrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id);
    });

    if (!encontrarInstrutor) {
        return res.status(404).json({ mensagem: 'Instrutor não encontrado' });
    }

    encontrarInstrutor.nome = nome;
    encontrarInstrutor.email = email;
    encontrarInstrutor.status = status;

    return res.status(203).send();
};

module.exports = {
    listagem,
    obterInstrutor,
    cadastraInstrutor,
    atualizarInstrutor
};