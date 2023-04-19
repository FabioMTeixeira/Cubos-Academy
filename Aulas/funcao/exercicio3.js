const pessoa = {
    nome: 'Fabio',
    idade: 20,
    profissao: 'Dev',
    altura: 1.73,
};

const apresentarPessoa = (pessoa) => {
    const { nome, idade, profissao, altura } = pessoa;
    const retornoDaFaixaEtaria = determinarFaixaEtaria(idade);

    console.log(`Olá! Meu nome é ${nome}, sou um ${retornoDaFaixaEtaria} de ${idade} anos, ${altura}m e sou ${profissao}`);
};

const determinarFaixaEtaria = (idade) => {
    //const { idade } = pessoa;
    if (idade < 21) {
        return "jovem";
    } else if (idade < 66) {
        return 'Adulto(a)';
    } else {
        return 'Idoso(a)';
    }
};

apresentarPessoa(pessoa);