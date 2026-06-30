let num1 = parseFloat(prompt('Digite o primeiro valor'))
let num2 = parseFloat(prompt('Digite o segundo valor'))
let operacao = parseInt (prompt(`Digite a operação a realizar, conforme menu:
1 - Adição
2 - Subtração
3 - Multiplicação
4 - Divisão`))

let result = null
let simb = ''

switch (operacao) {
    case 1:
        result = num1 + num2
        simb = '+'
        break;
    case 2:
        result = num1 - num2
        simb = '-'
        break;
    case 3:
        result = num1 * num2
        simb = 'x'
        break;
    case 4:
        if (num2 == 0) {
            result = 'NÃO HÁ DIVISÃO POR ZERO.'
        }
        else {
            result = num1 / num2
        }
        simb = ':'
        break;        
    default:
        result = 'CÓDIGO NUMÉRICO INVÁLIDO'
        break;
}

console.log(`${num1} ${simb} ${num2}
${result}`)
//Também poderia ser feito um console.log em cada case, seria mais fácil