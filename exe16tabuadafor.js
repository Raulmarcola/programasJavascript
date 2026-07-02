let num = parseInt (prompt('Informe o número da tabuada.'))
for (let index = 0; index <= 10; index++) {
    tabuada = num * index
    console.log(`${num} X ${index} = ${tabuada}`)
}