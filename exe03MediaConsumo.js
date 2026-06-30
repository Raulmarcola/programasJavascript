let kmPerc = parseFloat (prompt('Informe o total de kilômetros percorridos.'))
let combGasto = parseFloat (prompt ('Informe o combustívrl gasto, em litros.'))

let medCon = kmPerc / combGasto

alert(`A Média de Consumo do carro é ${medCon} km por litro de combustível.`)
console.log(`${kmPerc} / ${combGasto} = ${medCon} ->
A Média de Consumo do carro é ${medCon} km por litro de combustível.`)