function solucao(input) {
    // const linhas = input.trim().split('\n');

    // const coordenadas = [];
    // let maiorDistancia = 0;

    // for (let i = 1; i < linhas.length; i++) {
    //     const coord = linhas[i].trim().split(' ');
    //     coordenadas.push({
    //         x: parseFloat(coord[0], 10),
    //         y: parseFloat(coord[1], 10)
    //     });
    // };

    // for (let i = coordenadas.length - 1; i > 0 ; i--) {
    //     for (let j = i - 1; j >= 0; j--) {
    //         let soma = (Math.sqrt(Math.pow((coordenadas[i].x - coordenadas[j].x), 2) + Math.pow((coordenadas[i].y - coordenadas[j].y), 2)));
    //         if (soma > maiorDistancia) {
    //             maiorDistancia = soma
    //         };
    //     };
    // };

    // console.log(maiorDistancia);

    const linhas = input.trim().split('\n');

    const coordenadas = [];
    let maiorDistancia = 0;

    for (let i = 1; i < linhas.length; i++) {
        const coord = linhas[i].trim().split(' ');
        coordenadas.push({
            x: parseFloat(coord[0], 10),
            y: parseFloat(coord[1], 10)
        });
    };

    for (let i = 0; i < coordenadas.length ; i++) {
        for (let j = 0; j < coordenadas.length; j++) {
            let soma = Math.sqrt(Math.pow((coordenadas[i].x - coordenadas[j].x), 2) + Math.pow((coordenadas[i].y - coordenadas[j].y), 2));
            if (soma > maiorDistancia) {
                maiorDistancia = soma
            };
        };
    };

    console.log(maiorDistancia);
};

solucao('3\n0 0\n0 3\n4 0')