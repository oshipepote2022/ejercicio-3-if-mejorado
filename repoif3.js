
const numIngresado1= document.querySelector("#numeroIngresado1");


/* 
let numeroIngresado1 = prompt ("Ingrese primer numero");
let numeroIngresado2 = prompt ("Ingrese segundo numero");
let numeroIngresado3 = prompt ("Ingrese tercer numero"); */
function verificar(){
    console.log("ganaste el primer premio")
}


if ((numeroIngresado1 == numeroIngresado2) && (numeroIngresado2 == numeroIngresado3)) {
    document.write ("Felicidades, Ganaste el Primer premio!");
}else if (((numeroIngresado1 == numeroIngresado2) || (numeroIngresado1 == numeroIngresado3))||(numeroIngresado2== numeroIngresado3)) {
    document.write ("Felicidades, Ganaste el Segundo premio!");
}else{
    document.write ("Felicidades, Ganaste un Helado!");}