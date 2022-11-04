let palabras = ["Software", "Developer", "Engineer", "Ratio", "Flash"];

let definiciones = [["Encoded computer instructions, usually modifiable (unless stored in some form of unalterable memory such as ROM)", "una patata"], ["A real estate developer; a person or company who prepares a parcel of land for sale, or creates structures on that land."], ["ingeniero"], ["Ratio"], ["Flash"]];

let grabOrDrop = "grab";
let grabbed = "";
let grabbed2 = "";
let lastTd = "";

ElementsGenerar(LogitudaPal(palabras[0]))
MostrarDesordenada(Desordenada(palabras[0]));
mostrarDefs(definiciones[0]);

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

    //para raul
let palabraPrueba = "";
document.addEventListener("keydown", function(e) {
    palabraPrueba += e.key;
    comprobarSecreto();
})
console.log("abrakadabra".length)
function comprobarSecreto()
{
    if (palabraPrueba.length == 11) {
        

        for (let i = 0; i < palabraPrueba.length; i++) {
            if (palabraPrueba == "abrakadabra") {
                console.log("funciona")
                palabraPrueba = "";
                return true;
            }else{
                palabraPrueba = "";
            }
        }
    }
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
