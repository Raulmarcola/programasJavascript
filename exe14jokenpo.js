alert('**PEDRA PAPEL E TESOURA**')
let sorteio = Math.floor(Math.random()*3)

let jogada = parseInt (prompt(`Escolha sua jogada:
1 - Pedra
2 - Papel
3 - Tesoura`))

let hum = ''

switch (jogada) {
    case 1:
        hum = 'Pedra'
        break;
    case 2:
        hum = 'Papel'
        break;
    case 3:
        hum = 'Tesoura'
        break;        
    default:
        break;
}

let maq = ''

switch (sorteio) {
    case 0:
        maq = 'Pedra'
        if (jogada == 1){
            result = `${hum} X ${maq}
EMPATE`;
        } else if (jogada == 2) {
                result = `${hum} X ${maq}
VITÓRIA DO USUÁRIO`;
        }  else if (jogada == 3) {
            result = `${hum} X ${maq}
VITÓRIA DA MÁQUINA`;
        }  else{
            result = 'JOGADA INVÁLIDA';
           } 
        break;


    case 1:
        maq = 'Papel'
        if (jogada == 1){
            result = `${hum} X ${maq}
VITÓRIA DA MÁQUINA`;
        } else if (jogada == 2) {
            result = `${hum} X ${maq}
EMPATE`;
        }  else if (jogada == 3) {
            result = `${hum} X ${maq}
VITÓRIA DO USUÁRIO`;
        }  else{
            result = 'JOGADA INVÁLIDA';
           } 
        break;     
        
        
    default:
        maq = 'Tesoura'
        if (jogada == 1){
            result =`${hum} X ${maq}
VITÓRIA DO USUÁRIO`;
        } else if (jogada == 2) {
            result = `${hum} X ${maq}
VITÓRIA DA MÁQUINA`;
        }  else if (jogada == 3) {
            result = `${hum} X ${maq}
EMPATE`;
        }  else{
            result = 'JOGADA INVÁLIDA';
           } 
        break;
}    
alert(result)