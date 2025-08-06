let biblioteca = [
    {
        titulo: "Shatter Me",
        autor: "Tahereh Mafi",
        editora: "Storytide",
        idioma: "Inglês",
        ano: 2011,
        paginas: 339
    },
    {
        titulo: "The Kiss Of Deception",
        autor: "Mary Pearson",
        editora: "DarHenry Holt & Companykside",
        idioma: "Inglês",
        ano: 2014,
        paginas: 489
    },
    {
        titulo: "Red Queen",
        autor: "Victoria Aveyard",
        editora: "Harper Teen",
        idioma: "Inglês",
        ano: 2015,
        paginas: 416
    },
    {
        titulo: "A Court of Thorns and Roses",
        autor: "Sarah J Maas",
        editora: "Bloomsbury Publishing",
        idioma: "Inglês",
        ano: 2015,
        paginas: 432
    },
    {
        titulo: "The Midnight Library",
        autor: "Matt Haig",
        editora: "Viking",
        idioma: "Inglês",
        ano: 2020,
        paginas: 229
    }
]

console.log(`Autor do livro na posição 1: ${biblioteca[1].autor}`)
console.log(`Ano de publicação na posição 2: ${biblioteca[2].ano}`)
console.log(`Página de todos os livros: `)
for(let i=0; i<biblioteca.length; i++) {
    console.log(`${biblioteca[i].paginas}`)
}
for (let i = 0; i < biblioteca.length; i++) {
    console.log(`Livro ${i + 1}: ${biblioteca[i].titulo}`);
}
for (let i = 0; i < biblioteca.length; i++) {
    if (biblioteca[i].paginas > 250) {
        console.log(`${biblioteca[i].titulo} tem mais de 250 páginas.`);
    }
}
