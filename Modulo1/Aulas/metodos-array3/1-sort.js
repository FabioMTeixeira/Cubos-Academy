//ordena os elementos do prorpio array

const array = [2,4,1,20,3,43];

array.sort((a,b) => {
    return a - b;
});

console.log(array);