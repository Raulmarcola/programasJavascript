alert('*VERIFICADOR DE PARIDADE*')
let num = parseInt (prompt('Digite um número.'))

let resto = num % 2
let pari = null

if (resto == 0) {
    pari = 'PAR'
} else {
    pari = 'ÍMPAR'
}

console.log(`O NÚMERO ${num} É ${pari}.`)