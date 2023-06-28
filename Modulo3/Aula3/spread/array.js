const primeiroTrimestre = ['jan', 'fev', 'mar'];
const segundoTrimestre = ['abr', 'mai', 'jun'];
const terceiroTrimestre = ['jul', 'ago', 'set'];

const primeiroSemestre = [ ...primeiroTrimestre, ...segundoTrimestre];
console.log(primeiroSemestre);