let cadastro = [];
let i = 0;
for (let i = 0; i < 6; i++) {
    let nome = prompt(`Informe o nome do funcionário ${i + 1}:`);
    let cargo = prompt(`Informe o cargo do funcionário ${i + 1}:`).toLowerCase();
    let salario = Number(prompt(`Informe o o salário do funcionário ${i + 1}:`));
    let tempoServico = Number(prompt(`Informe o tempo de serviço do funcionário ${i + 1}:`));

    let funcionarios = {
        nome: nome,
        cargo: cargo,
        salario: salario,
        tempoServico: tempoServico
    };
    cadastro.push(funcionarios);
}

let maior = cadastro[0]
let soma = 0
let gerentes = 0

for (let i = 0; i < cadastro.length; i++) {
    if (cadastro[i].salario > 5000 && cadastro[i].tempoServico > 5) {
        console.log(`${cadastro[i].nome} recebe mais de R$5000 e possui mais de 5 anos na empresa.`);
    }
    if (cadastro[i].salario > maior.salario) {
       maior = cadastro[i]
    }
    soma = soma + cadastro[i].salario
    if (cadastro[i].cargo === "gerente") {
        gerentes++;
    }
}
let media = soma/6
console.log(`${maior.nome} possui o maior salário.`);
console.log(`A média salarial da empresa é: ${media}`);
console.log(`A quantidade de gerentes: ${gerentes}`);