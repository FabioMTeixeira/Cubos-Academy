const pessoas = ['Joao', 'ana', 'carlos', 'beatriz'];

pessoas.sort((a, b) => {
    return a.localeCompare(b);
});

console.log(pessoas);