const users = {
    name: 'Fabio',
    age: 25,
    stack: 'Fullstack',
};

const userAddress = {
    city: 'sp',
    country: 'brasil'
};

const newUserData = { ...users, address:{ ...userAddress, country: 'BR' } };

console.log(newUserData);