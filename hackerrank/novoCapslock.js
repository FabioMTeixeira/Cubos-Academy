function solucao(input) {
    input = input.trim();
    if (input[0] === input[0].toUpperCase()) { 
        if (input === input.toUpperCase()) { 
        console.log(input.toLowerCase());
        } else { 
        console.log(input);
        };
    } else if (input[0] === input[0].toLowerCase()) { 
            maiusculaEncontrada = 0;
            for (let i = 1; i < input.length; i++) {
                if (input[i] === input[i].toUpperCase()) {
                    maiusculaEncontrada++;
                };
            };
            if (maiusculaEncontrada === input.length - 1) {
                // let juntandoPalavras = '';
                // primeiraLetra = input[0].toUpperCase();
                // let restoDaPalavra = input.slice(1);
                // newInput = newInput.toLowerCase();

                // juntandoPalavras = input + newInput;
                // console.log(juntandoPalavras);
                console.log(input[0].toUpperCase() + input.slice(1).toLowerCase());
            } else {
                console.log(input);
            };
    };
};

solucao('3 \n 00 \n 03 \n 40');