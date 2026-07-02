let user = 'Raul'
let senha = '1234'
let userin = null
let senhain = null

while(userin != user || senhain != senha){
    userin = prompt('Usuário: ')
    senhain = prompt('Senha: ')
    if (userin != user || senhain != senha){
        alert('Aceso Negado')
    }
}

alert('Acesso Permitido')