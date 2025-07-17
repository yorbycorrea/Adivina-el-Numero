 function verificarAdivinanza(){
            const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
            const numeroIngresado = parseInt(document.querySelector("#numero-adivina").value);
            console.log(numeroAleatorio);
            console.log(numeroIngresado);console.log( typeof numeroIngresado);

            if(numeroIngresado === numeroAleatorio){
                document.querySelector("#resultado").innerHTML = "Felicidades!, Adivinastes";
            }else{
                document.querySelector("#resultado").innerHTML = "Lo siento, el numero era " + numeroAleatorio;
            }

             //Limpiar el cuadro de texto del nombre de la tarea
            document.getElementById("numero-adivina").value = ""; // el "nueva_tarea" viene del id del input
        }