var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main() {
    const n = parseInt(lines[0]);
    const m = parseInt(lines[1]);
    const figurinhasCompradas = new Set();
    
    for (let i = 2; i < 2 + m; i++) {
        const x = parseInt(lines[i]);
        figurinhasCompradas.add(x);
    }
    
    const figurinhasFaltantes = n - figurinhasCompradas.size;
    console.log(figurinhasFaltantes);
}