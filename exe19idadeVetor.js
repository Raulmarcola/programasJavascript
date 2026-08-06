idades = []
nomes = []

for(let x = 0; x < 5; x++){
    nomes[x] = prompt('Digite nome.')
    idades[x] = parseInt(prompt('Digite idade.'))
}

let escolha = parseInt(prompt('Escolha um índice do vetor, de 0 a 4'))

alert(`Nome e Idade correspondentes ao índice ${escolha}: ${nomes[escolha]}, ${idades[escolha]} anos`)

// idades = []
// nomes = []

// for(let x = 0; x < 5; x++){
//     idades[x] = parseInt(prompt(`Digite a ${x+1}° idade.`))
//     nomes[x] = (prompt(`Digite o ${x+1}° nome.`))
// }

// let escolha = parseInt(prompt('Digite uma posição do vetor'))

// alert(`Idade e nome correspondentes a ${escolha}° posição: ${idades[escolha-1]}`)