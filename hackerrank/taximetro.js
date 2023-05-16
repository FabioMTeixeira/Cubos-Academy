function solucao(min, km) {
    let valorPorMinuto = 0;
    let valorPorKm = 0;
    let valorAcimaDeVinteMinutos = 0;
    let valorAcimaDeDezKm = 0;
    let valorTotalKm = 0;
    let valorTotalMin = 0;
    
    if(min > 20) {
        valorPorMinuto = 20 * 50;
        min -= 20;
        valorAcimaDeVinteMinutos = min * 30;
        valorTotalMin = valorAcimaDeVinteMinutos + valorPorMinuto;
    } else {
        valorPorMinuto = min * 50;
        valorTotalMin = valorPorMinuto;
    };

    if(km > 10) {
        valorPorKm = 10 * 70;
        km -= 10;
        valorAcimaDeDezKm = km * 50;
        valorTotalKm = valorAcimaDeDezKm + valorPorKm;
    } else {
        valorPorKm = km * 70;
        valorTotalKm = valorPorKm;
    };

    console.log(Math.floor(valorTotalKm + valorTotalMin));
};

solucao(0, 0);