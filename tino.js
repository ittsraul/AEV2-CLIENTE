let palabras = ["Software", "Developer", "Engineer", "Ratio", "Flash"];

let definiciones = ["Encoded computer instructions, usually modifiable (unless stored in some form of unalterable memory such as ROM)", "A real estate developer; a person or company who prepares a parcel of land for sale, or creates structures on that land.", "ingeniero", "Ratio", "Flash"];
/* 
Pasos para realizar el f)
1. sacar la longitud de cada palabra
2. crear tantos elementos azules como letras tenga la palabra
3. Mostrar por pantalla la palabra desordenada
4. Crear otra tabla con las definiciones
*/

ElementsGenerar(8)
MostrarDesordenada("vedleoep")
function ElementsGenerar(cantElements){
    /* Genera los cuadrados azules necesarios para cada palabra */

    let table = document.getElementsByTagName("table")[0];
    let elem = table.getElementsByClassName("activity")[0];

    removeAll(table);

    for (let i = 0; i < cantElements; i++) {
        let td = document.createElement("td")
        td.classList.add("activity");
        table.appendChild(td);
    }
}

function removeAll(table)
{
    /* limpia todos los cuadrados azules. Se llama desde ElementsGenerar */

    table.innerHTML = "";
}

function MostrarDesordenada(palabra)
{
    let activity = document.getElementsByClassName("activity");
    let arrPalabra = palabra.split("");
    for (let i = 0; i < 8; i++) {
        activity[i].innerHTML = arrPalabra.shift();
    }
}

let shuffled = prueba.split('').sort(function(){return 0.5-Math.random()}).join('');
/* 
Pasos para realizar el g)
1. Evento de click
    1.1 Seleccionar primer elemento
    1.2 Seleccionar segundo elemento
    1.3 Cambiar la posición
*/

/* 
Pasos para realizar el h)
1. Cada vez que se le da al titulo cambia de palabra y la desordena
*/