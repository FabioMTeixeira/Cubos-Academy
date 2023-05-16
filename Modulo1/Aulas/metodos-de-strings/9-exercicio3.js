function replaceAll (original, text, newText) {
    while (original !== original.replace(text, newText)) {
        original = original.replace(text, newText);
    }
    console.log(original);
}

let numeros = "1,350,000";
replaceAll(numeros, ',', '.')
