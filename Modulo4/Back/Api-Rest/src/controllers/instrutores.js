const { instrutores } = require('../bancoDeDados');

const listagem = (req, res) => {
    return res.json(instrutores);
};

module.exports = {
    listagem
};