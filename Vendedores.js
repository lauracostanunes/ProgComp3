let matriz = [];
let nomesVendedores = [];
for (let i = 0; i < 4; i++) {
    let nome = prompt(`Digite o nome do vendedor ${i + 1}:`);
    nomesVendedores.push(nome);
}
for (let i = 0; i < 4; i++) {;
    matriz[i] = [];
    for (let j = 0; j < 7; j++) {
        matriz[i][j] = parseInt(Math.random()*100)
    }
}
console.log(`Matriz de vendas: `);
console.log(matriz)

let somaVendedor = 0;
for (let i = 0; i < 4; i++) {
    somaVendedor = 0
    for (let j = 0; j < 7; j++) {
        somaVendedor = somaVendedor + matriz[i][j]
    }
    console.log(`${nomesVendedores[i]} vendeu R$${somaVendedor}`);
}

let somaDia = 0;
for (let j = 0; j < 7; j++) {
    somaDia = 0
    for (let i = 0; i < 4; i++) {
        somaDia = somaDia + matriz[i][j]
    }
    console.log(`No dia ${j+1} foram vendidos R$${somaDia}`)
}

let maiorValor = matriz[0][0];
let posicaoMaior = {vendedor: 0, dia: 0};

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 7; j++) {
        if (matriz[i][j] > maiorValor) {
            maiorValor = matriz[i][j];
            posicaoMaior = {vendedor: i, dia: j};
        }
    }
}
console.log(`Maior valor de venda: R$${maiorValor} (${nomesVendedores[posicaoMaior.vendedor]}, Dia ${posicaoMaior.dia + 1})`);

let somaTotal = 0;
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 7; j++) {
        somaTotal += matriz[i][j];
    }
}
let media = somaTotal / (4 * 7);
console.log(`Média geral das vendas da semana: R$ ${media}`);