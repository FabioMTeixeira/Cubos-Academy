const lodash = require('lodash');
const array = require('./array');

const array = [1, 4, 4, 5, 2, 6, 4, 8, 1];

const arrayUnico = lodash.uniq(array);

console.log(arrayUnico);