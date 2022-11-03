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
    if (event.key == "A" ) { 
        letras+="A";
        console.log("a");
        if (event.key == "B") {
            letras+=event;
            if (event.key == "R") {
                letras+=event;
                if (event.key == "A") {
                    letras+=event;
                    if (event.key == "C") {
                        letras+=event;
                        if (event.key == "A") {
                            letras+=event;
                            if (event.key == "D") {
                                letras+=event;
                                if (event.key == "A") {
                                    letras+=event;
                                    if (event.key == "B") {
                                        letras+=event;
                                        if (event.key == "R") {
                                            letras+=event;
                                            if (event.key == "A") {
                                                letras+=event;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }else{
        return "error";
    }
    console.log(letras);
});
