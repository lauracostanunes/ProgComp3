var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let input = "10\n3\n5\n8\n3"
let lines = input.split('\n');

let total = parseInt(lines[0])
let pacote = parseInt(lines[1])

let nova = new Set ()
for (let i = 2; i <= pacote + 1; i++) {
    nova.add(lines[i])
}

let Faltam = total - nova.size
console.log(Faltam)