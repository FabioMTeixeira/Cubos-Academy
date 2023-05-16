function aproveitarDados(dados) {
    const quantidadeDeDado = dados.length;
    const primeirosNumeros = Math.round(quantidadeDeDado*0.1);
    const ultimosNumeros = Math.round(quantidadeDeDado*0.9);
    const resultado = dados.slice(primeirosNumeros, ultimosNumeros);
    console.log(resultado);
};

const dados = [1,2,3,5,4,8,2,6,7,1,1,2,3,5,4,8,2,6,7,1];

aproveitarDados(dados);
