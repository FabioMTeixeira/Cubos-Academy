const nomeCompleto = 'fabio matos teixeira';
const arrayNome = nomeCompleto.split(' ');

let nomeFormatado = '';

for (let item of arrayNome) {
    let primeiraLetra = item.slice(0, 1);
    let restanteDoNome = item.slice(1);

    nomeFormatado += primeiraLetra.toUpperCase() + restanteDoNome + " ";
};

console.log(nomeFormatado.trim());