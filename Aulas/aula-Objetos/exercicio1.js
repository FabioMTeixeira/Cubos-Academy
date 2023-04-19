const pessoa = {
    nome: 'Fabio',
    idade: 25,
    altura: 1.73,
    temCNH: false,
    apelidos: ['binho', 'fafa']
};

const CNHAceita = pessoa.temCNH ? 'possui CNH' : 'não possui CNH';


console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${CNHAceita} e os seguintes apelidos:`);
for (const apelido of pessoa.apelidos) {
    console.log(`- ${apelido}`);
}