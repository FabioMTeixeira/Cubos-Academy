const valorDaCompra = 100;
const numeroDeParcelas = 12;

//const valorTotal = numeroDeParcelas === 1 ? valorDaCompra * 0.9 : valorDaCompra/numeroDeParcelas;

if (numeroDeParcelas === 1) {

    const valorTotal = valorDaCompra * 0.9;
    console.log(`Seu valor ficará ${valorTotal} à vista com desconto de 10%`);
} else if (numeroDeParcelas < 7){

    const valorTotal = valorDaCompra/numeroDeParcelas;
    console.log(`Seu valor ficará ${valorTotal} em ${numeroDeParcelas}x sem juros`);
} else if(numeroDeParcelas <= 12){

    const valorTotal = (valorDaCompra * Math.pow(1 + (1/100), numeroDeParcelas))/numeroDeParcelas
    console.log(`Seu valor ficará ${valorTotal} em ${numeroDeParcelas}x com juros`);
}