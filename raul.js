//Captura de Teclado
let body = document.body;
let keyboard = document.getElementById("keyboard-cont");

//borrado de teclado
/* function Deleteboard(body, board) {
    body.removeChild(board);
} 

Deleteboard();*/
 let letras = "";
 /* let keyContent = ""; */
body.addEventListener("keydown", (event)=>{
    event.preventDefault();

    
    console.log(event.key);

});
