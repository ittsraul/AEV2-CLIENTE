//Captura de el body
let body = document.body;

//Captura de Teclado
let keyboard = document.getElementById("keyboard-cont");

//borrado de teclado
function Deleteboard() {
    body.removeChild(keyboard);
}

//Call the function to delete
Deleteboard();

//Variable container with words we have introduced
let letras = "";

//function for make keyboard event to unlock it
/* function AppearsKeyboard() {
    body.addEventListener("keydown", (event) => {
            letras += event.key;
            checkAWord();
    });
}

 function CreateKeyboard(){
    let div = document.Createe("div");
    let forms = document.createElement("form");
    let div2 = document.createElement("div");
    let button = document.createElement("button");
    
    body.appendChild(div);
    div.appendChild(forms);
    forms.appendChild(div2);
    div2.appendChild(button);
} 

//function for check the words we introduced in the keyboard
function checkAWord()
{
    if (letras.length == 11) {
        for (let i = 0; i < letras.length; i++) {
            if (letras == "abrakadabra") {
                console.log("funciona y tiene " + letras.length + " de longitud");
                letras = ""; 
                // CreateKeyboard();
                // console.log(letras);
                return true;
            }else{
                letras = "";
            }
        }
    }
}

//Call the function to make Appears the keyboard
AppearsKeyboard(); */

//Function to make Disappears the keyboard
function DisappearsKeyboard() {
    body.addEventListener("keydown", (event) => {
        letras -= event.key;
        checkDWord();
    });
}

//function to make check of the words
function checkDWord() {
    if (letras.length == 11) {
        for (let j = 0; j < letras.length; j++) {
            if (letras == "patadecabra") {
                console.log("funciona y tiene " + letras.length + " de longitud");
                letras="";
                Deleteboard();
            } else {
                alert("error");
            }
        }
    } else {
        alert("error");
    }

}

//Call the function to make Disappears the keyboard
DisappearsKeyboard(); 