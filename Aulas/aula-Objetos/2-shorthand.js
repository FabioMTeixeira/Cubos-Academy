const carro = {
    marca:'Toyota',
    modelo:'Etios',
    ano: 2020,
    potencia: 80,
};

const pessoa = {
    nome: 'Fabio',
    altura: 1.73,
    peso: 60,
    carro
};

console.log(pessoa.carro.modelo);