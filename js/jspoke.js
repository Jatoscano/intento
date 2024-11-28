const correct = "Felicitaciones, ha seleccionado la opción correcta.";
const incorrect ="Pokémon incorrecto, inténtalo nuevamente.";

let puntajeText = document.getElementById("idScore");  
let intentosText = document.getElementById("idIntent");

let score = 0;
let intent = 0;

function validar(answer) {

    intent++;

    let image = document.getElementById("idImage");
    let msgCorrect = document.getElementById("idAnswer");
    let msgIncorrect = document.getElementById("idAnswer");

    if(answer == 4){

        image.src = "../img/pcolor.jpg";
        msgCorrect.style.background = "blue";
        msgCorrect.style.fontFamily = "Timer New Roman, Times, serif";
        msgIncorrect.style.border = "solid";

        document.getElementById('idAnswer').innerText = correct;

        switch(intent){
            case 1:
                score += 5;
                break;
            case 2:
                score += 3;
                break;
            case 3:
                score += 1;
                break;
        
            default:
                score = 0;
        }

        puntajeText.innerText = `Puntaje: ${score}`;
        intentosText.innerText = `Intentos: ${intent}`;
        
        if(intent > 3){
            reiniciar();
        }
    }
    else{
        msgIncorrect.style.background = "red";
        msgIncorrect.style.fontFamily = "Timer New Roman, Times, serif";
        msgIncorrect.style.border = "solid";

        document.getElementById('idAnswer').innerText = incorrect;

        if (intent > 3) {
            reiniciar();
            alert("Se han agotado los intentos, intentalo nuevamente.");
        } else {
            intentosText.innerText = `Intentos: ${intent}`;
        }
    }
}

function reiniciar(){
    score = 0;
    intent = 0;

    document.getElementById('idAnswer').innerText = "";
    let imagen = document.getElementById("idImage");
    imagen.src = "../img/pnegro.jpg";
    document.getElementById('idScore').innerText = `Puntaje: ${score}`;
    document.getElementById('idIntent').innerText = `Intentos: ${intent}`;
    document.getElementById('idAnswer').style.border = "none";
}