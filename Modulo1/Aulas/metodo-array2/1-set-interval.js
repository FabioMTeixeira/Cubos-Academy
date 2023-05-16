//faz o que a função esta descrita a cada tempo
// const imprimir = () => {
//     console.log('Cubos Academy');
//     clearInterval(intervalo);
// };

// const intervalo = setInterval(imprimir, 5000);

let numero = 10;

const contador = setInterval(() => {
    console.log(numero);

    numero--;

    if(numero === 0) {
        console.log('Booooom');
        clearInterval(contador);
    };
}, 1000);
