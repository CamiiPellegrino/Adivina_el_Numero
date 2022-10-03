let boton = document.getElementById("boton");
let pista = document.getElementById("pista");
let titulo = document.getElementById("titulo");
let contador = parseInt(0)

let random = Math.random();
random = Math.trunc(random * 100 + 1)

boton.onclick = funcionNroAleatorio


function funcionNroAleatorio(){
do {
    let nroElegido = parseInt(prompt("¿puedes adivinar un número del 1 al 100, en 7 intentos o menos?"))
    nroElegido;
    contador++;

    if(nroElegido == random){
        alert("FELICIDADES! Has ganado. Reinicia la página para jugar otra vez :)");
        contador = 7;

    } else if(nroElegido < random){
        alert("Una pista: Su numero es demasiado BAJO");
    } else if(nroElegido > random){
        alert("Una pista: Su numero es demasiado ALTO");

    }
    
} while (contador<7);


}