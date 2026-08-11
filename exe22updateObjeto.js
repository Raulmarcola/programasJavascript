let livro = {
    titulo: 'O Menino que caiu no Buraco',
    autor: 'Ivan Jaf',
    anoPublicacao: 2004,
    genero: 'literatura infanto-juvenil',
    paginas: 96
}

alert(`Livro -

Título: ${livro.titulo}
Autor: ${livro.autor}
Ano de Publicação: ${livro.anoPublicacao}
Gênero: ${livro.genero}
Número de Páginas: ${livro.paginas}`)

let resposta = parseInt(prompt(`Qual dado sobre o livro será alterado?
1 - Título
2 - Autor
3 - Ano de Publicação
4 - Gênero
5 - Número de Páginas`))

switch (resposta) {
    case 1:
        livro.titulo = prompt('Atualização: ')
        break;
    case 2:
        livro.autor = prompt('Atualização: ')
        break;
    case 3:
        livro.anoPublicacao = prompt('Atualização: ')
        break;
    case 4:
        livro.genero = prompt('Atualização: ')
        break;
    case 5:
        livro.paginas = prompt('Atualização: ')
        break;
    default:
        alert('Resposta Inválida')
        break;
}

alert(`Livro Atualizado -

Título: ${livro.titulo}
Autor: ${livro.autor}
Ano de Publicação: ${livro.anoPublicacao}
Gênero: ${livro.genero}
Número de Páginas: ${livro.paginas}`)