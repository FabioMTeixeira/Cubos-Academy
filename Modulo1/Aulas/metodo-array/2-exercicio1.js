function reverterPalavra(palavra) {
    const arrayDeLetras = palavra.split('');
    arrayDeLetras.reverse();

    let textoInvertido = arrayDeLetras.join('');

    // let textoInvertido = '';

    // for (const letra of arrayDeLetras) {
    //     textoInvertido += letra;
    // }

    console.log(textoInvertido);
};

reverterPalavra('bicho');