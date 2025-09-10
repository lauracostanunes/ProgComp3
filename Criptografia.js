var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function criptografar(texto) {
    // Primeira passada: deslocar letras 3 posições para direita na ASCII
    let primeira = '';
    for (let i = 0; i < texto.length; i++) {
        const char = texto[i];
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            primeira += String.fromCharCode(char.charCodeAt(0) + 3);
        } else {
            primeira += char;
        }
    }
    
    // Segunda passada: inverter a string
    let segunda = primeira.split('').reverse().join('');
    
    // Terceira passada: deslocar caracteres da metade em diante 1 posição para esquerda
    let terceira = '';
    const metade = Math.floor(segunda.length / 2);
    
    for (let i = 0; i < segunda.length; i++) {
        if (i >= metade) {
            terceira += String.fromCharCode(segunda.charCodeAt(i) - 1);
        } else {
            terceira += segunda[i];
        }
    }
    
    return terceira;
}

// Processamento da entrada
const n = parseInt(lines[0]);

for (let i = 1; i <= n; i++) {
    const linha = lines[i].trim();
    if (linha) { // Verifica se a linha não está vazia
        const resultado = criptografar(linha);
        console.log(resultado);
    }
}