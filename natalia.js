
// Variables    
let teclado = document.getElementById("keyboard-cont");
let letra = "";
let palabra = "";
let id = 0;

// Eventos
/* evento de ratón click sobre las letras del teclado de forma que se irán almacenando en una variable cada una de las letras pulsadas */
teclado.addEventListener("click", function (e) {
    letra = e.target.textContent;
    palabra += letra;
    console.log(palabra);
});


/* evento de teclado para que cuando se pulse la tecla ENTER se guarde la palabra en el navegador, de forma que los datos persistan cuando se cierren las pestañas o se refresque la página */
let enter = document.getElementsByTagName("form")[0];
enter.addEventListener("submit", function (e) {
    e.preventDefault();
    window.localStorage.setItem(id, JSON.stringify(palabra));
    id++;
    palabra = "";
});







