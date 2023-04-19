//verificar se uma pessoa é maior de idade

const verificarMaiorIdade = (idade) => {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
};

const valorRetornadoPelaFuncao = verificarMaiorIdade(20);
console.log(valorRetornadoPelaFuncao);