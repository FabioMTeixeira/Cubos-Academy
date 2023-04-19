//Serve para achar um texto ou letra dentro de uma string e devolve o indice onde esta

//saber se um email é valido
//tem que ter pelo menos um @
//tem que ter pelo menos um ponto depois do @

const email = 'jeirol@gnmdo.com';

let temArroba = email.indexOf('@');

let ehEmail = email.indexOf('.', temArroba);

console.log(ehEmail);
