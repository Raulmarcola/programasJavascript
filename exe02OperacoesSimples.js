alert('Digite dois números e o algoritmo mostrará as operações do primeiro pelo segundo.')
let num1 = parseInt (prompt('Primeiro número: ')) 
let num2 = parseInt (prompt('Segundo número: '))

let soma = num1 + num2
let subtracao = num1 - num2
let mult = num1 * num2
let div = num1 / num2

console.log(`${num1} + ${num2} = ${soma}
${num1} - ${num2} = ${subtracao}
${num1} * ${num2} = ${mult}
${num1} / ${num2} = ${div}`)
