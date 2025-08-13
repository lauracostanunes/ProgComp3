let cadastro = [];
let i = 0;
for (let i = 0; i < 7; i++) {
    let nomeProjeto = prompt(`Informe o nome do projeto ${i + 1}:`);
    let empresa = prompt(`Informe o nome da empresa ${i + 1}:`).toLowerCase();
    let duracaoMeses  = Number(prompt(`Informe a duração do projeto ${i + 1} em meses:`));
    let orcamento  = Number(prompt(`Informe o orçamento do projeto ${i + 1} em reais:`));

    let projetos = {
        nomeProjeto: nomeProjeto,
        empresa: empresa,
        duracaoMeses: duracaoMeses,
        orcamento: orcamento
    };
    cadastro.push(projetos);
}

let maior = cadastro[0]
let soma = 0
let InovaTech = 0
let total = 0;

for (let i = 0; i < cadastro.length; i++) {
    if (cadastro[i].duracaoMeses  > 12 && cadastro[i].orcamento > 1000000) {
        console.log(`${cadastro[i].nomeProjeto} possui duração superior a 12 meses e possui orçamento maior do que R$1.000.000,00.`);
    }
    if (cadastro[i].orcamento > maior.orcamento) {
       maior = cadastro[i]
    }
    soma = soma + cadastro[i].duracaoMeses
    if (cadastro[i].empresa === "inovatech") {
        InovaTech++;
    }
    if (cadastro[i].duracaoMeses < 6) {
        total += cadastro[i].orcamento;
    }
}
let media = soma/7
console.log(`${maior.nomeProjeto} possui o maior orçamento.`);
console.log(`A média de duração dos projetos é de: ${media} meses`);
console.log(`A quantidade de projetos da InovaTech é: ${InovaTech}`);
console.log(`Total gasto com projetos com menos de 6 meses de duração é de ${total.toFixed(2)} reais`);