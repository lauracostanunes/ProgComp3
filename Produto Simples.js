var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let a = parseInt(lines[0])
let b = parseInt(lines[1])
let PROD = a * b
console.log(`PROD = ${PROD}`)