var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

let ledsPorDigito = {
    '0': 6,
    '1': 2,
    '2': 5,
    '3': 5,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 3,
    '8': 7,
    '9': 6
};

let n = parseInt(lines[0]);

for (let i = 1; i <= n; i++) {
    let numero = lines[i].trim();
    let totalLeds = 0;
    
    for (let j = 0; j < numero.length; j++) {
        let digito = numero[j];
        totalLeds += ledsPorDigito[digito];
    }
    
    console.log(`${totalLeds} leds`);
}