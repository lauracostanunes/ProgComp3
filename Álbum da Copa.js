var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main() {
    let n = parseInt(lines[0]);
    let m = parseInt(lines[1]);
    let figurinhasCompradas = new Set(); // SET armazena valores únicos
    
    for (let i = 2; i < 2 + m; i++) {
        let x = parseInt(lines[i]);
        figurinhasCompradas.add(x); // Adiciona ao Set - ignora repetidas
    }
    
    let figurinhasFaltantes = n - figurinhasCompradas.size; // Número de figurinhas ÚNICAS
    console.log(figurinhasFaltantes);
}
main();