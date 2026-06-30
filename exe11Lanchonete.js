alert(`*MENU*
COMIDA:
1 - Bauru
2 - X-Galinha
3 - Pizza

BEBIDA:
1 - Guaraná
2 - Água
3 - Vinho`)

let com = prompt ('Digite código da comida que deseja: ')
let beb = prompt ('Digite código da bebida que deseja: ')
let mensage = null

if (com == 1 && beb == 1 || com == 2 && beb == 2 || com == 3 && beb == 1) {
    mensage = 'PEDIDO NEGADO.'
} else {
    mensage = 'PEDIDO ACEITO.'
}

alert(`${mensage}`)