alert(`**CALCULADORA DE DESCONTO**
Informe sobre o produto: `)

preco = parseFloat (prompt('Preço, em R$: '))
regiao = parseInt (prompt(`Região de Origem, conforme código numérico:
1 - Norte
2 - Sul
3 - Sudeste
4 - Noredeste
5 - Centro-oeste`))

let desc = null
let result = null
nomeReg = ''

switch (regiao) {
    case 1:
        desc = preco * 0.05
        result = preco - desc
        nomeReg = 'NORTE'
        break;
    case 2:
        desc = preco * 0.15
        result = preco - desc
        nomeReg = 'SUL'
        break;
    case 3:
        desc = preco * 0.07
        result = preco - desc
        nomeReg = 'SUDESTE'
        break;
    case 4:
        desc = preco * 0.12
        result = preco - desc
        nomeReg = 'NORDESTE'
        break;
    case 5:
        desc = preco * 0.20
        result = preco - desc
        nomeReg = 'CENTRO-OESTE'
        break;                
    default:
        result = "PRODUTO IMPORTADO"
        break;
}

if (regiao >= 1 && regiao <= 5){
    console.log(`REGIÃO: ${nomeReg}
PREÇO INICIAL: R$ ${preco.toFixed(2)}
DESCONTO: R$ ${desc.toFixed(2)}
PREÇO FINAL: R$ ${result.toFixed(2)}`)
}
else{
    console.log(`${result}`)
}