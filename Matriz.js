let matriz = [];
for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = parseInt(Math.random()*10); // Números inteiros aleatórios de 0 a 10
    }
}
let soma = 0;
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        soma += matriz[i][j];
    }
}
console.log(`Soma: `, soma);
let pares = 0;
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] % 2 === 0) // === -> compara tipo de variável e tipo de dados são iguais
        pares++
    }
}
console.log(`Quantidade de pares: `, pares)
for (let i = 0; i < matriz.length; i++) {
    console.log(`Diagonal secundária: ${matriz[i][matriz.length-1-i]}`);
}
// matriz.length vai retornar a quantidade de linhas da matriz
// matriz[0].length vai retornar a "quantidade de elementos na linha"