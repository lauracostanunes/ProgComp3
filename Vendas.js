let matriz = [];
const vendedores = 4;
const dias = 7;

for (let i = 0; i < vendedores; i++) {
    matriz[i] = [];
    for (let j = 0; j < dias; j++) {
        let valor = Number(prompt(`Digite o valor vendido pelo vendedor ${i + 1} no dia ${j + 1}:`));
        matriz[i][j] = isNaN(valor) ? 0 : valor;
    }
}
for (let i = 0; i < vendedores; i++) {
    let somaVendedor = 0;
    for (let j = 0; j < dias; j++) {
        somaVendedor += matriz[i][j];
    }
    console.log(`Total vendido pelo vendedor ${i + 1}: R$ ${somaVendedor.toFixed(2)}`);
}
for (let j = 0; j < dias; j++) {
    let somaDia = 0;
    for (let i = 0; i < vendedores; i++) {
        somaDia += matriz[i][j];
    }
    console.log(`Total vendido no dia ${j + 1}: R$ ${somaDia.toFixed(2)}`);
}
let maiorValor = matriz[0][0];
let posicaoMaior = {vendedor: 0, dia: 0};

for (let i = 0; i < vendedores; i++) {
    for (let j = 0; j < dias; j++) {
        if (matriz[i][j] > maiorValor) {
            maiorValor = matriz[i][j];
            posicaoMaior = {vendedor: i, dia: j};
        }
    }
}
console.log(`Maior valor de venda: R$ ${maiorValor.toFixed(2)} (Vendedor ${posicaoMaior.vendedor + 1}, Dia ${posicaoMaior.dia + 1})`);
let somaTotal = 0;
for (let i = 0; i < vendedores; i++) {
    for (let j = 0; j < dias; j++) {
        somaTotal += matriz[i][j];
    }
}
let media = somaTotal / (vendedores * dias);
console.log(`Média geral das vendas da semana: R$ ${media.toFixed(2)}`);