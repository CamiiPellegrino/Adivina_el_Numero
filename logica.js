let boton = document.getElementById("boton");
let pista = document.getElementById("pista");
let titulo = document.getElementById("titulo");
let contador;


boton.addEventListener('click',function(){
    reiniciar();
},false)

function funcionNroAleatorio(random){
    while (contador<=7) {
        let turno = parseInt(7 - contador)
        let nroElegido = parseInt(prompt("¿puedes adivinar un número del 1 al 100? te quedan " + turno + " intentos"))
        contador++;
        
        if(nroElegido >100 || nroElegido< 0){
            alert("!error: El número debe estar en el intervalo 0-100. Vuelva a intentarlo")
            contador--;
        }else if(contador == 7){
            alert("Has PERDIDO. Toca de vuelta el botón para empezar otra vez")
            contador = 7;
            break;
        }else if(nroElegido == random){
            alert("FELICIDADES! Has ganado. Toca de vuelta el botón para empezar otra vez :)");
            contador = 7;
            break;
        } else if(nroElegido < random){
            alert("Una pista: Su numero es demasiado BAJO");
        } else if(nroElegido > random){
            alert("Una pista: Su numero es demasiado ALTO");
        }
    }
}


function reiniciar(){
    let random = Math.random();
    random = Math.trunc(random * 100 + 1);
    funcionNroAleatorio(random);
    contador = 0;
}