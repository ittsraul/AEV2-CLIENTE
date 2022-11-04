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