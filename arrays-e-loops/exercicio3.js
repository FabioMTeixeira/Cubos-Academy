const numeros = [1 , 2 , 5, 8, 7, 10, 0, 5, 22];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma = numeros[i] + soma;
}
console.log(soma);