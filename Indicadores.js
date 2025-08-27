let regioes = [];
for (let i = 0; i < 5; i++) {
    regioes.push(prompt(`Digite o nome da região ${i + 1}:`));
}
let matriz = [];
for (let i = 0; i < 5; i++) {
    matriz[i] = [];
    for (let j = 0; j < 5; j++) {
        matriz[i][j] = parseInt(Math.random() * 501); 
    }
}
console.log(`Matriz de poluição: `);
console.table(matriz);
let somaDiagPrincipal = 0;
let diagPrincipal = [];
for (let i = 0; i < 5; i++) {
    diagPrincipal.push(matriz[i][i]);
    somaDiagPrincipal += matriz[i][i];
}
let mediaPrincipal = somaDiagPrincipal / 5;
console.log(`Diagonal principal: `, diagPrincipal);
console.log(`Média da diagonal principal: `, mediaPrincipal);
let somaDiagSec = 0;
let diagSec = [];
for (let i = 0; i < 5; i++) {
    diagSec.push(matriz[i][4 - i]);
    somaDiagSec += matriz[i][4 - i];
}
let mediaSec = somaDiagSec / 5;
console.log(`Diagonal secundária: `, diagSec);
console.log(`Média da diagonal secundária: `, mediaSec);
let maiorValor = matriz[0][0];
let posicaoMaior = { regiao: 0, dia: 0 };
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (matriz[i][j] > maiorValor) {
            maiorValor = matriz[i][j];
            posicaoMaior = { regiao: i, dia: j };
        }
    }
}
console.log(`Maior índice registrado: ${maiorValor} (Região: ${regioes[posicaoMaior.regiao]}, Dia ${posicaoMaior.dia + 1})`);
let contCritico = 0;
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (matriz[i][j] > 300) {
            contCritico++;
        }
    }
}
console.log(`Quantidade de vezes que o índice foi superior a 300: ${contCritico}`);
let menorMedia = 0;
let regiaoMenorMedia = 0;
for (let i = 0; i < 5; i++) {
    let somaRegiao = 0;
    for (let j = 0; j < 5; j++) {
        somaRegiao += matriz[i][j];
    }
    let mediaRegiao = somaRegiao / 5;
    if (mediaRegiao < menorMedia) {
        menorMedia = mediaRegiao;
        regiaoMenorMedia = i;
    }
}
console.log(`Região com menor média de poluição: ${regioes[regiaoMenorMedia]} (Média = ${menorMedia})`);