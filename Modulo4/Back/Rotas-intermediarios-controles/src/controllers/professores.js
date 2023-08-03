const professores = require('../bancoDeDados');

const filtrarProfessores = (req, res) => {
    let resultado = professores;
    const { nome } = req.query;

    if (nome) {
        resultado = professores.filter((professor) => {
            return professor.nome === nome;
        });
    }

    res.send(resultado);
};

const encontrarUmProfessor = (req, res) => {
    const { id } = req.params;

    const professorEncontrado = professores.find((professor) => {
        return professor.id === Number(id);
    });

    res.send(professorEncontrado);
};

module.exports = {
    filtrarProfessores,
    encontrarUmProfessor
}

