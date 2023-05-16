function solucao(input) {
        const linhas = input.trim().split('\n');
        let palavraCorreta = linhas[0];
        let palavraDigitada = linhas[1];
        let indicePalavraCorreta = 0;
        let palavra = '';

        for (let i = 0; i < palavraDigitada.length; i++) {
            if (palavraDigitada[i] == palavraCorreta[indicePalavraCorreta]) {
                palavra += palavraCorreta[indicePalavraCorreta];
                indicePalavraCorreta++;
            };
        };

        if (palavra === palavraCorreta) {
            console.log('SIM');
        } else {
            console.log('NAO');
        };
};

solucao(`cubos\nuuutdfgwjqdvuelgjcqqwpzhgzpjqxcngfyhojudnswzbncopkwqxipjdexuuqcqhmyizqcarxqnijpqhckhiiqyzgommksvrbexglobeuacnypdjpxoyemqbifrjnmrubgmrfxethjbjzgodtgkdxqzwvjdqfsghnabcskxfutsfnhpwbtquwnmyuqicnpqypmapffqacnetpbnpkyaltyhnhtlselgvfakeycniollwnltqcdfldbsooitcshlkgncboashvjkqepjxpvfuamcwsmcisrushwytuldukdlrxskxnlkgruruivqaqbubgsmlbcvpobfvaqczyeajqpzihoxyahoshwkiltqgjgaxlefglfxewzohjkjsuqceelhygjbfahoqixgpqqmdmaxomfobyrcpjwxikirpgxrapplqpkmfljaouyekimfgfsywfqgbozkgfvldrelocjryojbomkcrousedwhgztjwjhwvlthcdyenvvxouuipxkxtqfceblcrfpuiunejlvueidrtsowrsdpkybfvgakvcsjuqfslxafnyvbrckligabdxvyettqwrqaowkyayszsfasuwceutzpwmmrcpkvmvmbyoyhgjvftedaqsxjjefyuqysczxrbcslulmvuhrurpcssboyxqeecekcyeejqslikwexssadpatwuqfqbunlxpilfvtbjtgokssrzwpeoczapfpnabrndsmxohcyavyojbsyffibtzvpzcwdecnytlwrsksqxczcmseoqceozetzcbzwczmsfucvuzqepzganfixyzlwgrmjsxhbgebqoazhzvlnjjosrvcgctelbrzgehikunvpctahotokgrrhdkeragacfptalhapfehyygnstgrwohvmujtmfvkwntscbjbdrqgtekoqemrhndzsscpnguwkzwsprthtozvhzzzqzhqakbqhpuyvmnhcayhsoolpikqkanq`);