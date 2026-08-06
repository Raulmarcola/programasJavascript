// Raul Marçola

let a = []
let b = []

for(let x = 0; x < 10; x++){
    a[x] = parseInt(prompt(`Informe um valor. (${x+1}/10)`)) 
}

for(let i = 0; i < a.length; i++){
    if (i % 2 == 0){
        b[i] = a[i] * 5
    }
    else{
        b[i] = a[i] + 5
    }
}

for(let s = 0; s < b.length; s++){
    console.log(`índice ${s}: ${a[s]} => ${b[s]}`)
}