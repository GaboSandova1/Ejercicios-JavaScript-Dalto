//Ejercicio 1 de dalto para aprender JacvaScript:

// A 3 chicos de 23 años perfectamente normales entran a una heladeria a 
// comprar un helado pero hay un problema: los precios no estan al lado 
// de cada estante con su respectivo helado.
// Ellos quieren comprar el helado mas caro que puedan con la plata que 
// tienen, asi que... veamos como podemos ayudarlos.


//Presupuesto de los chicos:

//Robert = 1.5$
//Pedro = 1.7$
//Cofla = 3$


//Precio de los helados:

//Palito de helado de agua = 0.6$
//Palito de helado de crema = 1$
//Bombon helado marca heladix = 1.6$
//Bombon helado marca heladovich = 1.7$
//Bombon helado marca helardo = 1.8$
//Potecito de helado con confites = 2.9$
//Pote de 1/4 KG = 2.9$


//Solucion:

//1. Pedirles que ingresen el monto que tienen y mostrarles el helado.
//2. Si hay 2 o mas con el mismo precio, mostrar ambos.
//3. Cofla quiere saber cuanto es el vuelto.



//Declaracion de variables

let PresupuestoCofla = prompt("Cuanto dinero tienes Cofla?");

let PresupuestoRobert = prompt("Cuanto dinero tienes Robert?");

let PresupuestoPedro = prompt("Cuanto dinero tienes Pedro?");

let palitoAgua = 0.6;
let palitoCrema = 1;
let BombonHeladix = 1.6;
let BombonHeladovich = 1.7;
let BombonHelardo = 1.8;
let PotecitoConfites = 2.9;
let PoteUnCuarto = 2.9;

//Para Cofla

if (PresupuestoCofla >= 2.9 ) {
    alert("Bueno Cofla, estos son los helados que puedes comprar: Un pote de 1/4 KG a solo 2.9$ o un potecito de helado con confites al mismo precio");
    vuelto = PresupuestoCofla - PoteUnCuarto;
    alert("tu vuelto es de " + vuelto + "$");
} else if (PresupuestoCofla >= 1.8 && PresupuestoCofla < 2.9) {
    alert("Bueno Cofla, solo te alcanza para comprar un bombon helado marca helardo a 1.8$");
    vuelto = PresupuestoCofla - BombonHelardo;
    alert("tu vuelto es de " + vuelto + "$");
} else if (PresupuestoCofla >= 1.7 && PresupuestoCofla < 1.8) {
    alert("Bueno Cofla, solo te alcanza para comprar un bombon helado marca heladovich a 1.7$")
    vuelto = PresupuestoCofla - BombonHeladovich;
    alert("tu vuelto es de " + vuelto + "$");
} else if (PresupuestoCofla >= 1.6 && PresupuestoCofla < 1.7) {
    alert("Bueno Cofla, solo te alcanza para comprar un bombon helado marca heladix a 1.6$");
    vuelto = PresupuestoCofla - BombonHeladix;
    alert("tu vuelto es de " + vuelto + "$");
} else if (PresupuestoCofla >= 1 && PresupuestoCofla < 1.6) {
    alert("Bueno Cofla, solo te alcanza para comprar un palito de helado de crema a 1$");
    vuelto = PresupuestoCofla - palitoCrema;
    alert("tu vuelto es de " + vuelto + "$");
} else if (PresupuestoCofla >= 0.6 && PresupuestoCofla < 1) {
    alert("Solo te alcanza para comprarte un palito de helado de agua a 0.6$ Cofla");
    vuelto = PresupuestoCofla - palitoAgua;
    alert("tu vuelto es de " + vuelto + "$");
} else{
    alert("Lo siento Cofla no te alcanza para n' ");
}

//Para Robert

if (PresupuestoRobert >= 2.9 ) {
    alert("Bueno Robert, estos son los helados que puedes comprar: Un pote de 1/4 KG a solo 2.9$ o un potecito de helado con confites al mismo precio");
} else if (PresupuestoRobert >= 1.8 && PresupuestoRobert < 2.9) {
    alert("Bueno Robert, solo te alcanza para comprar un bombon helado marca helardo a 1.8$");
} else if (PresupuestoRobert >= 1.7 && PresupuestoRobert < 1.8) {
    alert("Bueno Robert, solo te alcanza para comprar un bombon helado marca heladovich a 1.7$")
} else if (PresupuestoRobert >= 1.6 && PresupuestoRobert < 1.7) {
    alert("Bueno Robert, solo te alcanza para comprar un bombon helado marca heladix a 1.6$");
} else if (PresupuestoRobert >= 1 && PresupuestoRobert < 1.6) {
    alert("Bueno Robert, solo te alcanza para comprar un palito de helado de crema a 1$");
} else if (PresupuestoRobert >= 0.6 && PresupuestoRobert < 1) {
    alert("Solo te alcanza para comprarte un palito de helado de agua a 0.6$ Robert");
} else{
    alert("Lo siento Robert no te alcanza para na'");
}

//Para Pedro

if (PresupuestoPedro >= 2.9 ) {
    alert("Bueno Pedro, estos son los helados que puedes comprar: Un pote de 1/4 KG a solo 2.9$ o un potecito de helado con confites al mismo precio");
} else if (PresupuestoPedro >= 1.8 && PresupuestoPedro < 2.9) {
    alert("Bueno Pedro, solo te alcanza para comprar un bombon helado marca helardo a 1.8$");
} else if (PresupuestoPedro >= 1.7 && PresupuestoPedro < 1.8) {
    alert("Bueno Pedro, solo te alcanza para comprar un bombon helado marca heladovich a 1.7$")
} else if (PresupuestoPedro >= 1.6 && PresupuestoPedro < 1.7) {
    alert("Bueno Pedro, solo te alcanza para comprar un bombon helado marca heladix a 1.6$");
} else if (PresupuestoPedro >= 1 && PresupuestoPedro < 1.6) {
    alert("Bueno Pedro, solo te alcanza para comprar un palito de helado de crema a 1$");
} else if (PresupuestoPedro >= 0.6 && PresupuestoPedro < 1) {
    alert("Solo te alcanza para comprarte un palito de helado de agua a 0.6$ Pedro");
} else{
    alert("Lo siento Pedro no te alcanza para na'");
}


