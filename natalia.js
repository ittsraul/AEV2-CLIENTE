/* NATÀLIA */
        // Variables    
        let teclado = document.getElementById("keyboard-cont");
        let letra = "";
        let palabra = "";
        let id = 0;
        let url = "";
        let data = [];


        // Eventos
        /* evento de ratón click sobre las letras del teclado de forma que se irán almacenando en una variable cada una de las letras pulsadas */
        teclado.addEventListener("click", crearParaula ) 

        function crearParaula(event) {
            letra = event.target.textContent;
            //que no guarde el valor de la letra enter
            if (letra != "Enter") {
            palabra += letra;
            console.log(palabra);
            }
        };


        /* evento de teclado para que cuando se pulse la tecla ENTER se guarde la palabra en el navegador, de forma que los datos persistan cuando se cierren las pestañas o se refresque la página */
        let enter = document.getElementsByTagName("form")[0];
        enter.addEventListener("submit", function (e) {
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

        function api(e) {
            e.preventDefault();

            for (let i = 0; i < localStorage.length; i++) {
                palabra = JSON.parse(localStorage.getItem(i));
                url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + palabra;
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                    })
                    .catch(error => console.log(error));
            }
            return data;
        };

/* NATÀLIA */





