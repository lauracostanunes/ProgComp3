let biblioteca = [];
for (let i = 0; i < 5; i++) {
    let titulo = prompt(`Informe o título do livro ${i + 1}:`);
    let autor = prompt(`Informe o autor do livro ${i + 1}:`);
    let editora = prompt(`Informe a editora do livro ${i + 1}:`);
    let idioma = prompt(`Informe o idioma do livro ${i + 1}:`);
    let ano = Number(prompt(`Informe o ano de publicação do livro ${i + 1}:`));
    let paginas = Number(prompt(`Informe o número de páginas do livro ${i + 1}:`));
    let soma = 0
    soma = paginas[i] + soma

    let livro = {
        titulo: titulo,
        autor: autor,
        editora: editora,
        idioma: idioma,
        ano: ano,
        paginas: paginas
    };
    biblioteca.push(livro);
}
let media = soma/5
for (let i = 0; i < biblioteca.length; i++) {
    if (biblioteca[i].paginas > 300) {
        console.log(`${biblioteca[i].titulo} tem mais de 300 páginas.`);
    }
}
for (let i = 0; i < biblioteca.length; i++) {
    if (biblioteca[i].paginas > biblioteca[0].paginas) {
        console.log(`${biblioteca[i].paginas} tem maior número de páginas.`);
    }
}
console.log(`A média das páginas da biblioteca é: ${media}`)