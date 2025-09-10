var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(/\s+/);

let i = 0
while (i < lines.length) {
    let X = parseInt(lines[i++]) // Altura da placa da empresa
    let Y = parseInt(lines[i++]) // Largura da placa da empresa
    let P = parseInt(lines[i++]) // Quantidade de placas
    for (let j = 0; j < P; j++) {
        let Xi = parseInt(lines[i++]) // Altura da placa do usuário
        let Yi = parseInt(lines[i++]) // Largura da placa do usuário
        if ((Xi <= X && Yi <= Y) || (Xi <= Y && Yi <= X)) {
            console.log('Sim')
        }
        else {
            console.log('Nao')
        }
    }
}