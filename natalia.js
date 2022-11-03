/* El teclado permitirá la introducción de palabras. Para ello se implementará el 
s y cuando 
finalmente se pulse la tecla ENTER, éstas se guardarán en el navegador, de 
forma que los datos persistan cuando se cierren las pestañas o se refresque la 
página. Nota: la tecla ‘DEL’ no es necesario implementarla. */

// Variables    
let teclado = document.getElementById("keyboard-cont");
let boton = document.getElementById("boton");
let letra = "";
let palabra = "";
let letras = "";

// Eventos
/* evento de ratón click sobre las letras del teclado de forma que se irán almacenando en una variable cada una de las letras pulsadas */
teclado.addEventListener("click", function (e) {
    letra = e.target.textContent;
    letras += letra;
    console.log(letras);
});


/* evento de teclado para que cuando se pulse la tecla ENTER se guarde la palabra en el navegador */
let enter = document.getElementsByTagName("button")[28];

enter.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("hola");
});






