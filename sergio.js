let palabras = ["Software", "Developer", "Engineer", "Ratio", "Flash"];

let definiciones = [["Encoded computer instructions, usually modifiable (unless stored in some form of unalterable memory such as ROM)", "una patata"], ["A real estate developer; a person or company who prepares a parcel of land for sale, or creates structures on that land."], ["ingeniero"], ["Ratio"], ["Flash"]];


LogitudaPal(palabras[0])

Desordenada(palabras[0])

PasaPalabra(palabras)

function LogitudaPal(palabra) {
    
  
    return(palabra.length)

}

function Desordenada(palabra) {
    let pala=palabra.toLowerCase()
    let shuffled = pala.split('').sort(function(){return 0.5-Math.random()}).join('');
    return(shuffled);
    

}



/* Flujo del juego: cada vez que el usuario haga click sobre el título de primer
nivel “Let’s Play!”, se mostrará por pantalla una nueva palabra desordenada
con sus definiciones. El flujo del juego se detendrá al llegar a la última de las
palabras guardadas en el navegador. */


/* 
1 Hacer que el letsplay sea clicable

2 Obtener una palabra desordenada

3 Dar la definicion correspondiente

4 Al llegar a la ultima mostrar que a terminado
*/


function PasaPalabra(palabra) {
    let current = 0;
    let h1 = document.getElementsByTagName("h1")[0];
  
/* AddEventLisener hay que cambiarlo ya hay uno creado */
    h1.addEventListener("click", function(){
        if(current == palabra.length - 1){
            current = 1;
        } else {
            current += 2;
        }
       console.log(palabra[current]);
       if(palabra[current]==undefined){
        alert("Para")
       }


    });
    
    
    

}
