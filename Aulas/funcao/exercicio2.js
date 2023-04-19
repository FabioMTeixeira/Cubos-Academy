const determinarFaixaEtaria = (idade) => {
    if (idade <= 21) {
        return 'jovem';
    } else if (idade <= 65) {
        return 'adulto(a)';
    } else {
        return 'idoso(a)';
    }
};

const faixaEtariaDaPessoa = faixaEtaria(68);
console.log(faixaEtariaDaPessoa);