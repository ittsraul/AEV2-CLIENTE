/* Raúl */
//keep the body
let body = document.body;

//keep the keyboard
let keyboard = document.getElementById("keyboard-cont");

//borrado de teclado
function Deleteboard() {
    body.removeChild(keyboard);
}

//Call the function to delete
Deleteboard();

//Variable container with words we have introduced
let letras = "";

//Fucnction for create the keyboard
function CreateKeyboard(){
    body.appendChild(keyboard);
} 

//function for make keyboard event to unlock it
function AppearsKeyboard() {
    body.addEventListener("keydown", (event) => {
            letras += event.key;
            checkAWord();
    });
}

//function for check the words we introduced in the keyboard
function checkAWord()
{
    if (letras.length == 11) {
        for (let i = 0; i < letras.length; i++) {
            if (letras == "abrakadabra") {
                console.log("funciona y tiene " + letras.length + " de longitud");
                letras = ""; 
                CreateKeyboard();
            }else{
                letras = "";
            }
        }
    }
}

//Call the function to make Appears the keyboard
AppearsKeyboard(); 

let letrasDesaparcer = "";
//Function to make Disappears the keyboard
    body.addEventListener("keydown", (event) => {
        letrasDesaparcer += event.key;
        checkDWord();
    });


//function to make check of the words
function checkDWord() {
    if (letrasDesaparcer.length == 11) {
        for (let j = 0; j < letrasDesaparcer.length; j++) {
            if (letrasDesaparcer == "patadecabra") {
                console.log("funciona y tiene " + letrasDesaparcer.length + " de longitud");
                letrasDesaparcer="";
                Deleteboard();
            } else {
                letrasDesaparcer="";
            }
        }
    }
} 
/* End Raúl */

/* NATÀLIA */

// Variables    
/* let teclado = document.getElementById("keyboard-cont"); */
let letra = "";
let palabra = "";
let id = 0;
let url = "";
let ArrayPalabras = [];
let Comienzo = false;
let puntos = 0;
let primerValor;


// Eventos
/* evento de ratón click sobre las letras del teclado de forma que se irán almacenando en una variable cada una de las letras pulsadas */
keyboard.addEventListener("click", crearParaula ) 

function crearParaula(event) {
    letra = event.target.textContent;
    //que no guarde el valor de la letra enter
    if (letra != "Enter") {
    palabra += letra;
    console.log(palabra);
    }
};


/* evento de teclado para que cuando se pulse la tecla ENTER se guarde la palabra en el navegador, de forma que los datos persistan cuando se cierren las pestañas o se refresque la página */
/* enter = document.getElementsByTagName("form")[0]; */

keyboard.addEventListener("submit", function (e) {
    e.preventDefault();
    window.localStorage.setItem(id, JSON.stringify(palabra));
    id++;
    palabra = "";
});


/* Cuando un usuario haga click sobre el título de primer nivel “Let’s Play!” se 
iniciará el juego. Para ello, se recogerán una a una las palabras guardadas en el 
navegador y se realizará con cada una de ellas una petición HTTP GET a la 
siguiente API pública:
https://api.dictionaryapi.dev/api/v2/entries/en/<word>
*/



let titulo = document.getElementsByTagName("h1")[0];
titulo.addEventListener("click", api)

async function api() 
{
    let calc = false;
    if (ArrayPalabras.length < 1) {
        if (!Comienzo) {
            

            for (let i = 0; i < localStorage.length; i++) {
                palabra = JSON.parse(localStorage.getItem(i));
                const endpoint = "https://api.dictionaryapi.dev/api/v2/entries/en/" + palabra;
                try {
                    const response = await fetch(endpoint, {cache: 'no-cache'});
                    if (response.ok) {
                        const jsonResponse = await response.json();
                            ArrayPalabras.push(jsonResponse);
                    }
                } catch (error) {
                    console.log(error);
                } 
            }
        }else{
            calc = true;
        }
    }

    if (Comienzo) {
        let resultado = recogerPalabra()
        console.log(resultado + " " + primerValor[0].word);
        if (resultado == primerValor[0].word) {
            puntos++;
        }
    }
    if (calc) {
        calcularResultado(puntos);
        return "";
    }
    
    primerValor = ArrayPalabras.shift();

    ElementsGenerar(LogitudaPal(primerValor[0].word))
    MostrarDesordenada(Desordenada(primerValor[0].word));
    limpiarDefs();

    let definitions = primerValor[0].meanings[0].definitions;
    let defArray = [];

    for (let i = 0; i < definitions.length; i++) {
        defArray.push(definitions[i]["definition"])
    }
    mostrarDefs(defArray);



    Comienzo = true;
};

/* final NATÀLIA */

/* Tino y Sergio */



let grabOrDrop = "grab";
let grabbed = "";
let grabbed2 = "";
let lastTd = "";



function ElementsGenerar(cantElements){
    /* Genera los cuadrados azules necesarios para cada palabra */
    let table = document.getElementsByTagName("table")[0];
    let elem = table.getElementsByClassName("activity")[0];

    removeAll(table);

    for (let i = 0; i < cantElements; i++) {
        let td = document.createElement("td")
        td.classList.add("activity");
        table.appendChild(td);
        clickListeners(td);
    }
}

function removeAll(table)
{
    /* limpia todos los cuadrados azules. Se llama desde ElementsGenerar */

    table.innerHTML = "";
}

function MostrarDesordenada(palabra)
{
    /* Una vez obtenemos la palabra desordenada la muestra en sus respectivos elementos */
    let activity = document.getElementsByClassName("activity");
    let arrPalabra = palabra.split("");

    for (let i = 0; i < LogitudaPal(palabra); i++) {
        activity[i].innerHTML = arrPalabra.shift();
    }
}

function mostrarDefs(definitions)
{
    /* muestra las definiciones de las palabras en la tabla amarilla */
    let table = document.getElementsByTagName("table")[1];

    for (let i = 0; i < definitions.length; i++) {
        let tr = document.createElement("tr")
        let td = document.createElement("td");
        td.textContent = definitions[i];
        table.appendChild(tr).appendChild(td);

        td.style.fontSize = "1.3em";
        td.style.margin = "1px";
        td.style.padding = "10px";
        td.style.backgroundColor = "yellow";
    }
}

function clickListeners(td)
{
    td.addEventListener("click", function(){
        if (grabOrDrop == "grab") {
            grabbed = td.innerHTML;
            lastTd= td;
            grabOrDrop = "drop"
        }else if(grabOrDrop == "drop"){
            grabbed2 = td.innerHTML;
            td.innerHTML = grabbed;
            lastTd.innerHTML = grabbed2;
            grabOrDrop = "grab";
        }
    });
}

function limpiarDefs()
{
    let table = document.getElementsByTagName("table")[1];
    table.innerHTML = "";
}

function recogerPalabra()
{
    let table = document.getElementsByTagName("table")[0];
    let elems = table.getElementsByClassName("activity")
    let resultado = "";
   for (let i = 0; i < elems.length; i++) {
    resultado += elems[i].innerHTML;
   }
   return resultado;
}

function calcularResultado()
{
    let table = document.getElementsByTagName("table")[0];
    let table2 = document.getElementsByTagName("table")[1];
    table.innerHTML = "";
    table2.innerHTML = "";
    let titulo = document.getElementsByTagName("h1")[0];
    titulo.remove();

    let cantPalabras = localStorage.length;

    let h1 = document.createElement("h1");
    h1.innerHTML = "Score";
    document.body.appendChild(h1);
    let result = document.createElement("h1");
    result.innerHTML = puntos + "/" + cantPalabras;
    document.body.appendChild(result);
}

/* 
Pasos para realizar el h)
1. Cada vez que se le da al titulo cambia de palabra y la desordena
*/

function LogitudaPal(palabra) {
    
    return(palabra.length)

}

function Desordenada(palabra) {
    let pala=palabra.toLowerCase()
    let shuffled = pala.split('').sort(function(){return 0.5-Math.random()}).join('');
    return shuffled;
}
