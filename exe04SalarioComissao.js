alert('Informe sobre o vendedor -')
let nome = prompt('Nome: ')
let salFix = parseFloat (prompt('Salário Fixo: '))
let vend = parseFloat (prompt('Total das vendas, em R$: '))

let com = vend * 0.15
let salFin = salFix + com

alert(`Há uma Comissão de 15% sobre o total de vendas-
PRESSIONE F12 PARA VERIFICAR OLERITE.`)

console.log(`Vendedor(a): ${nome}
Salário Fixo: R$ ${salFix}
Comissão: R$ ${com.toFixed(2)}
Salário Final: R$ ${salFin.toFixed(2)}`)