const pessoa = {
    nome: 'Fabio',
    idade: 25,
    profissao: 'Dev',
    altura: 1.73,
};

const apresentacao = (pessoa) => {
    const { nome, idade, profissao, altura } = pessoa;

    if (idade < 18 ){
        console.log(`Olá! Meu nome é ${nome}, sou um jovem de ${idade} anos, ${altura}m e sou ${profissao}`);
    } else if (idade < 60) {
        console.log(`Olá! Meu nome é ${nome}, sou um adulto de ${idade} anos, ${altura}m e sou ${profissao}`);
    } else {
        console.log(`Olá! Meu nome é ${nome}, sou um jovem de ${idade} anos, ${altura}m e sou ${profissao}`);
    }
};

apresentacao(pessoa);