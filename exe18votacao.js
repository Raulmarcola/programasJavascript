let cont_11 = 0
let cont_22 = 0
let cont_33 = 0
let cont_nulo = 0

let vot = parseInt (prompt(`VOTAÇÃO -
    
Quantos serão os votantes?`))

alert(`CANDIDATOS:
JOSÉ - 11
MARIA - 22
MÁRCIA - 33

Informe o voto, conforme código numérico.`)

for(let x = 1; x <= vot ; x++){
    v = parseInt (prompt(`${x}° votante: `))

    switch (v) {
        case 11:
            cont_11++
            break;
        case 22:
            cont_22++
            break;
        case 33:
            cont_33++
            break;            
        default:
            cont_nulo++
            break;
    }
}
alert(`RESULTADO:
JOSÉ(11) - ${cont_11}
MARIA(22) - ${cont_22} 
MÁRCIA(33) - ${cont_33}
NULOS - ${cont_nulo} `);

if(cont_11 > cont_22 && cont_11 > cont_33){
    alert(`ELEITO: JOSÉ`)
}

else if(cont_22 > cont_11 && cont_22 > cont_33){
    alert(`ELEITA: MARIA`)
}

else if(cont_33 > cont_11 && cont_33 > cont_22){
   alert(`ELEITA: MÁRCIA`)
}
else{
    alert('EMPATE')    
}
