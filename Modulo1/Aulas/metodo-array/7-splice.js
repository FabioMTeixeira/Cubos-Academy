//altera o conteudo da lista, removendo zero ou mais itens de um array e pode acrescentar tb e modifica o original.

const lista = ['a','b','c','d','e'];
lista.splice(1, 2, 'f');
console.log(lista);