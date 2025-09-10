var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main() {
    const n = parseInt(lines[0]);
    const m = parseInt(lines[1]);
    const figurinhasCompradas = new Set(); // SET armazena valores únicos
    
    for (let i = 2; i < 2 + m; i++) {
        const x = parseInt(lines[i]);
        figurinhasCompradas.add(x); // Adiciona ao Set - ignora repetidas
    }
    
    const figurinhasFaltantes = n - figurinhasCompradas.size; // Número de figurinhas ÚNICAS
    console.log(figurinhasFaltantes);
}