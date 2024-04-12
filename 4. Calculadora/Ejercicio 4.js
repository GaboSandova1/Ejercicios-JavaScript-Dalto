// Ejercicio 4 de Dalto para aprender JavaSScript:

// Cofla feliz por haber empezado las clases volvio a su casa y ya tiene tarea 
// basica de claculo; tiene que hacer un par de ejercicios de matematicas que 
// incluyan suma, resta, division y multiplicacion, realizar esto con una calculadora 
// puede ser mucho mas efectivo.

// 1. Crear calculadora que nos simplifique el trabajo

// Funcion para sumar
const suma = (num1, num2)=>{
    return parseInt(num1) + parseInt(num2);
}

// Funcion para restar
const resta = (num1, num2)=>{
    return parseInt(num1) - parseInt(num2);
}

// Funcion para multiplicar
const multiplicacion = (num1, num2)=>{
    return parseInt(num1) * parseInt(num2);
}

// Funcion para dividir
const division = (num1, num2)=>{
    return parseInt(num1) / parseInt(num2);
}

do{

    var opcionInvalida = false;
    alert("Que operacion desea realizar? ");
    let opcion = prompt("1.suma 2.resta 3.multiplicación 4.division"); 
    let opcion2;

    if (opcion == 1 || opcion == "suma") {
        let num1 = prompt("Elija el primer numero para sumar");
        let num2 = prompt("Elija el segundo numero para sumar");
        res = suma(num1, num2);
        alert(`El resultado de ${num1} + ${num2} es:<b> ${res} </b>`);
        document.write(`El resultado de ${num1} + ${num2} es:<b> ${res} </b><br>`);
    }

    else if (opcion == 2 || opcion == "resta") {
        let num1 = prompt("Elija el primer numero para restar");
        let num2 = prompt("Elija el segundo numero para restar");
        res = resta(num1, num2);
        alert(`El resultado de ${num1} - ${num2} es:<b> ${res} </b>`);
        document.write(`El resultado de ${num1} - ${num2} es:<b> ${res} </b><br>`);
    }

    else if (opcion == 3 || opcion == "multiplicacion") {
        let num1 = prompt("Elija el primer numero para multiplicar");
        let num2 = prompt("Elija el segundo numero para multiplicar");
        res = multiplicacion(num1, num2);
        alert(`El resultado de ${num1} * ${num2} es:<b> ${res} </b>`);
        document.write(`El resultado de ${num1} * ${num2} es:<b> ${res} </b><br>`);
    }

    else if (opcion == 4 || opcion == "division") {
        let num1 = prompt("Elija el primer numero para dividir");
        let num2 = prompt("Elija el segundo numero para dividir");
        res = division(num1, num2);
        alert(`El resultado de ${num1} / ${num2} es:<b> ${res} </b>`);
        document.write(`El resultado de ${num1} / ${num2} es:<b> ${res} </b><br>`);
    }

    else {
        alert("Ingreso una opción invalida, vuelva a intentarlo.");
        opcionInvalida = true;
    }

    if (opcionInvalida == false){
        opcion2 = prompt("Deseas hacer alguna otra operacion?:")
        if(opcion2 == "si" || opcion2 == "Si"){
            opcionInvalida = true;
        } else {
            opcionInvalida = false;
        }
    }

}

while(opcionInvalida == true);

