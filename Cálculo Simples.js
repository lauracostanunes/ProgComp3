var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let dados1 = lines[0].split(' ');
let codigo1 = parseInt(dados1[0]);
let quantidade1 = parseInt(dados1[1]);
let valor1 = parseFloat(dados1[2]);

let dados2 = lines[1].split(' ');
let codigo2 = parseInt(dados2[0]);
let quantidade2 = parseInt(dados2[1]);
let valor2 = parseFloat(dados2[2]);

let total = (quantidade1 * valor1) + (quantidade2 * valor2);

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);