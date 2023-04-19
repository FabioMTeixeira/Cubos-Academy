function imprimirData(dia, mes, ano) {
    const diaFormatada = String(dia).padStart(2, '0');
    const mesFormatada = String(mes).padStart(2, '0');

    console.log(`${diaFormatada}/${mesFormatada}/${ano}`);
}

imprimirData(1, 2, 2501);