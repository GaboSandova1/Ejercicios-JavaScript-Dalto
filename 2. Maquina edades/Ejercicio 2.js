// Ejercicio 2 de dalto para aprender JavaScript:

// Un joven muy afortunado logro ganar el primer premio de la loteria... 
// exacto, estamos hablando del pobre al que cofla le dio una mano, 
// este pobre decide hacer una fiesta para festejar que salio de la pobreza con
// este millonario compro una maquina que deja pasar solamente a los mayores de 
// edad, entre otras cosas...


// Se necesita:

// 1. Dejar pasar solo a los mayores de edad.
// 2. La primer persona que entre despues de las 2 AM, no paga.


// declaracion de variables

let gratis = false;

// Declaracion de la funcion

function entrada(tiempo){
    let edades = prompt("Hola, cuantos años tienes?: ")
    if (edades < 18){
        alert("No puedes entrar, eres menor de edad");
    } else {
        if(tiempo >= 2 && tiempo < 7 && gratis == false){
            alert("Puedes pasar gratis, ya que eres mayor de edad y la primera persona despues de las 2AM")
            gratis == true;
        }
        else{
            alert(`Son las ${tiempo}:00hs, puedes pasar pero debes pagar tu entrada`)
        }
    }
}

// Lamada de la funcion

entrada(1);
entrada(2);
entrada(3);
entrada(4);
entrada(2.1);


