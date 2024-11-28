let intent = 0;
let score = 0;

const puntajeText = document.getElementById('idScore');
const intentosText = document.getElementById('idIntent');

function validar(answer) {
    intent++;

    let image = document.getElementById("idImage");
    let msgCorrect = document.getElementById("idAnswer");
    let msgIncorrect = document.getElementById("idAnswer");

    if (answer == 4) {
        image.src = "../img/pcolor.jpg";
        msgCorrect.style.background = "blue";
        msgCorrect.style.fontFamily = "Arial";
        msgIncorrect.style.border = "solid";

        document.getElementById('idAnswer').innerText = "Correcto";

        switch (intent) {
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

        if (intent >= 3) {
            reiniciar();
            alert("Se han agotado los intentos, intentalo nuevamente.");
        }
    } else {
        msgIncorrect.style.background = "red";
        msgIncorrect.style.fontFamily = "Arial";
        msgIncorrect.style.border = "solid";
        document.getElementById('idAnswer').innerText = "Incorrecto";

        if (intent >= 3) {
            reiniciar();
            alert("Se han agotado los intentos, intentalo nuevamente.");
        } else {
            intentosText.innerText = `Intentos: ${intent}`;
        }
    }
}

function reiniciar() {
    intent = 0;
    score = 0;
    puntajeText.innerText = `Puntaje: ${score}`;
    intentosText.innerText = `Intentos: ${intent}`;
    document.getElementById('idImage').src = "../img/pnegro.jpg";
    document.getElementById('idAnswer').innerText = "";
    document.getElementById('idAnswer').innerText = ""; 
}