let nomes = []

for (let x = 0; x < 8; x++) {
    nomes[x] = prompt(`Informe o ${x + 1}° nome de 8.`)
    //nome.push(prompt('Digite nome.')) .push ignora a posição e declara na próxima posição
}

while (true) {
    let pesquisa = prompt('Informe nome para pesquisa.')

    let posicao = nomes.indexOf(pesquisa)

    if (posicao == -1) {
        alert('Nome não encontrado!')
    }
    else {
        alert(`Nome encontrado! 
Posição na lista: ${posicao + 1}`)
    }

    let sair = prompt("Caso não queira pesquisar por outro nome, digite 'sair'.").toLowerCase()

    if (sair == 'sair') {
        break;
    }
}