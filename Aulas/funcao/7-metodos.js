// const determinarFaixaEtaria = (idade) => {
//     if (idade <= 21) {
//         return 'jovem';
//     } else if (idade <= 65) {
//         return 'adulto(a)';
//     } else {
//         return 'idoso(a)';
//     }
// };

const pessoa = {
    nome: 'Fabio',
    idade: 20,
    profissao: 'Dev',
    altura: 1.73,
    apresentar: function() {
    const { nome, idade, profissao, altura } = this;
    const retornoDaFaixaEtaria = this.determinarFaixaEtaria(idade);

    console.log(`Olá! Meu nome é ${nome}, sou um ${retornoDaFaixaEtaria} de ${idade} anos, ${altura}m e sou ${profissao}`);
    }, 
    determinarFaixaEtaria: function() {
        if (this.idade <= 21) {
            return 'jovem';
        } else if (this.idade <= 65) {
            return 'adulto(a)';
        } else {
            return 'idoso(a)';
        }
    }
};

pessoa.apresentar();

