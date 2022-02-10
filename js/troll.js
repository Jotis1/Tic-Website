
const textDisplay = document.getElementById("texto");

const frase = ["Gracias, ahora tengo todos tus datos bancarios!!!!!!!!!!", "Es broma (evidentemente) xD"]
let i = 0;
let j = 0;
let fraseActual = [];
let isDeleting = false;
let isEnd = false;

function loop(){

    isEnd = false;
    textDisplay.innerHTML = fraseActual.join("")

    if(i < frase.length){

        if(!isDeleting && j <= frase[i].length){
            fraseActual.push(frase[i][j])
            j++
        }

        
        if(isDeleting && j <= frase[i].length){

            if(i == 0){
                fraseActual.pop(frase[i][j])

                j--
            }

        }

        if(j == frase[i].length){
            isEnd == true
            isDeleting = true
        }

        if(isDeleting && j === 0){
            fraseActual = []
            isDeleting = false
            i++

            if(i == frase.length){
                
            }
        }

    }
    const vRapida = Math.random() * (80 - 50) + 50;
    const vNormal = Math.random() * (100 - 80) + 80;
    const tiempo = isEnd ? 2000 : isDeleting ? vRapida : vNormal;
    setTimeout(loop, tiempo)
}

loop()