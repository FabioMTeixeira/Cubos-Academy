//preenche uma string colocando text ate chegar no numero pedido.

const ultimos4dig = '2345';

const numCartao = ultimos4dig.padStart(19, '**** ');
console.log(numCartao);