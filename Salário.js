var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let NUMBER = parseInt(lines[0]);
let horas = parseInt(lines[1]);
let porhora = parseFloat(lines[2]);

let SALARY = horas * porhora;

console.log(`NUMBER = ${NUMBER}`);
console.log(`SALARY = U$ ${SALARY.toFixed(2)}`)