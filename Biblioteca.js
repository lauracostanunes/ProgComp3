let biblioteca = [];
for (let i = 0; i < 3; i++) {
    let titulo = prompt(`Informe o título do livro ${i + 1}:`);
    let autor = prompt(`Informe o autor do livro ${i + 1}:`);
    let editora = prompt(`Informe a editora do livro ${i + 1}:`);
    let idioma = prompt(`Informe o idioma do livro ${i + 1}:`);
    let ano = Number(prompt(`Informe o ano de publicação do livro ${i + 1}:`));
    let paginas = Number(prompt(`Informe o número de páginas do livro ${i + 1}:`));

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
for (let i = 0; i < biblioteca.length; i++) {
    if (biblioteca[i].paginas > 300) {
        console.log(`${biblioteca[i].titulo} tem mais de 300 páginas.`);
    }
}