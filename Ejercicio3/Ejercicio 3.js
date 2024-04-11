// Ejercicio 3 de dalto para aprender para aprender JavaScript

// Cofla vuelve de la comisaria exausto y por lo cansado que estaba se fue a dormir...
// Al otro dia comienzan las clases del ciclo basico de la universidad... En su curso
// en total son 19 alumnos, pero surgio un problema que complico un poco la facultad,
// se rompio el sistema de registro de asistencias y durante los proximos 30 dias no 
// se podran hacer registros de datos de ningun tipo, por ende las clases no podran 
// comenzar hasta que esto este solucionado.

// 1. Crear mini-sistema que nos permita registrar los alumnos que estan presentes (P) y ausentes (A) en clase.
// 2. Pasados los 30 dias mostrar la situacion final de todos los alumnos (Nro total de presentes y ausentes).
// 3. Se puede tener un maximo de 10% de ausencias por semestre, si se tiene mas aclarar que esta reprobado.

let cantidad = prompt("Cuantos alumnos son?: ");
let totalAlumnos = [];

for (i = 0; i < cantidad; i++){
    totalAlumnos[i] = [prompt("Nombre del alumno " + (i+1) + ":"), 0];
}

const tomarAsistensia = (nombre, p)=>{
    let presencia = prompt(nombre + " asistio a clase?: ");
    if (presencia == "P" || presencia == "p") {
        totalAlumnos[p][1]++;
    }
}

for (i=0; i < 30; i ++) {
    for (alumno in totalAlumnos) {
        tomarAsistensia(totalAlumnos[alumno][0],alumno);
    }
}

for (alumno in totalAlumnos) {
    let resultado = `${totalAlumnos[alumno][0]}:<br>
    __________Presentes: <b>${totalAlumnos[alumno][1]}</b><br>
    __________Ausentes: <b>${30 - totalAlumnos[alumno][1]} </b>`;
    if (30 - totalAlumnos[alumno][1] > 18) {
        resultado+= "<b style='color:red'>REPROBADO POR INASISTENCIA</b><br><br>";
    } else {
        resultado += "<br><br>";
    }
    document.write(resultado);
}

