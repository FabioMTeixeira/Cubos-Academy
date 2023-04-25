const nomesArquivos = ['pedro.nu', 'bat', 'bea', 'fabio'];

const detectarAmeaça = (nomes) => {
    const resultado = nomes.some((elemento) => {
        const arquivoComBat = elemento.indexOf('.bat');
        return arquivoComBat !== -1;
    });

    if (resultado) {
        console.log('virus detectado');
    }else {
        console.log('nenhum virus encontrado');
    };
};

detectarAmeaça(nomesArquivos);