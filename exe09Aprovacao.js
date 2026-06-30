alert('Informe sobre o aluno -')
let nome = prompt ("Nome: ")
let nota1 = parseFloat (prompt('1° Nota: '))
let nota2 = parseFloat (prompt('2° Nota: '))
let nota3 = parseFloat (prompt('3° Nota: '))

let media = (nota1 + nota2 + nota3) / 3
let situacao = null

if (media >= 7) {
    situacao = 'APROVADO'

} else if(media > 2) {
    situacao = 'RECUPERAÇÃO'

} else {
    situacao = 'REPROVADO'

}

console.log(`ALUNO(A): ${nome}
MÉDIA: ${media.toFixed(2)}
SITUAÇÃO: ${situacao}`)