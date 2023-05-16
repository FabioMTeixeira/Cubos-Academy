const palavra = "fabio";

let quantidadeDeA = 0;

for (let letra of palavra) {
    if (letra === "a") {
        quantidadeDeA ++;
    }
}

console.log(quantidadeDeA);