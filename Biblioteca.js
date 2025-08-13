let biblioteca = [];
let i = 0;
for (let i = 0; i < 5; i++) {
    let titulo = prompt(`Informe o título do livro ${i + 1}:`);
    let autor = prompt(`Informe o autor do livro ${i + 1}:`);
    let ano = Number(prompt(`Informe o ano de publicação do livro ${i + 1}:`));
    let paginas = Number(prompt(`Informe o número de páginas do livro ${i + 1}:`));


    let livro = {
        titulo: titulo,
        autor: autor,
        ano: ano,
        paginas: paginas
    };
    biblioteca.push(livro);
}

let maior = biblioteca[0]
let soma = 0

for (let i = 0; i < biblioteca.length; i++) {
    if (biblioteca[i].paginas > 300) {
        console.log(`${biblioteca[i].titulo} tem mais de 300 páginas.`);
    }
    if (biblioteca[i].paginas > maior.paginas) {
       maior = biblioteca[i]
    }
    soma = soma + biblioteca[i].paginas
}
let media = soma/5
console.log(`${biblioteca[i].titulo} tem maior número de páginas.`);
console.log(`A média das páginas da biblioteca é: ${media}`)