const users = {
    name: 'Fabio',
    age: 25,
    stack: 'Fullstack',
    address: {
        city: 'sp',
        country: 'brasil'
    }
};

const { name, age, stack, address: { city, country } } = users

console.log(users);