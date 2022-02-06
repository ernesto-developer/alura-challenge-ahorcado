

function drawBoy() {


    switch (wrongWords.length) {
        case 1:
            completeboy.push(boyHead);

            break;
        case 2:
            completeboy.push(boybody);
            break;
        case 3:
            completeboy.push(boyLeftArm);
            break;
        case 4:
            completeboy.push(boyRightArm);
            break;
        case 5:
            completeboy.push(boyLeftFoot);
            break;
        case 6:
            completeboy.push(boyRightFoot);
            break;

        default:
            break;
    }




}

function sortWord() {

    var numeroAsar = Math.floor(Math.random() * palabras.length);
    palabra = palabras[numeroAsar];


}
function drawWord(x, i, mostrar) {

    pincel.beginPath();
    mostrar == false ? correctWords.includes(palabra[i]) ? pincel.fillStyle = "#0A3871" : pincel.fillStyle = "transparent" :
        pincel.fillStyle = "#0A3871";



    pincel.font = "60px serif";
    pincel.fillText(palabra[i], x, posY - 60);



}

function drawWrongWord() {

    for (var i = 0; i < wrongWords.length; i++) {

        posXWrongWords = posXWrongWords + 40;

        pincel.beginPath();
        pincel.fillStyle = "#495057";
        pincel.font = "20px bold";
        pincel.fillText(wrongWords[i], posXWrongWords, posY - 10);
    }


}

function centradoDePalbra(array, textPos) {

    switch (array.length) {

        case 1:
            textPos == 1 ? posX : posXWrongWords;
            break;
        case 2:
            textPos == 1 ? posX : posXWrongWords -= 20;
            break;
        case 3:
            textPos == 1 ? posX -= 25 : posXWrongWords -= 45;
            break;
        case 4:
            textPos == 1 ? posX -= 50 : posXWrongWords -= 65;
            break;
        case 5:
            textPos == 1 ? posX -= 75 : posXWrongWords -= 80;
            break;
        case 6:
            textPos == 1 ? posX -= 100 : posXWrongWords -= 100;
            break;
        case 7:
            textPos == 1 ? posX -= 125 : posXWrongWords -= 125;
            break;
        case 8:
            textPos == 1 ? posX -= 150 : posXWrongWords -= 150;
            break;
        default:
            break;
    }

}

function revicionDePalabra() {

    for (let i = 0; i < palabra.length; i++) {

        if (correctWords.includes(palabra[i])) {
            juegoGanado = true;
            numeroDeClicks = 1;
        } else {

            juegoGanado = false;
            break;
        }


    }

}

function finDeIntentos(){
    if(wrongWords.length == intentos){
        juegoPerdido = true;
        desistir =true;
    }
    
}

//####################################### creacion del tablero de juego #######################
function drawGameBoard() {



    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
    drawPoste();
    centradoDePalbra(palabra, 1);
    centradoDePalbra(wrongWords, 2);
    drawWrongWord();
    for (var i = 0; i < palabra.length; i++) {

        posX = posX + 50;
        drawLineas(posX);
        drawWord(posX, i, desistir);


    }


    posX = pantalla.width / 2 - 95;
    posXWrongWords = pantalla.width / 2 - 45;
    if (juegoGanado) {
        alert("Lo consegiste has ganado");
        document.removeEventListener("keydown", eventosDelTecaldo);
        juegoGanado = false;

    }
    if(juegoPerdido){
        alert("Lo siento pero perdiste");
        document.removeEventListener("keydown", eventosDelTecaldo);
        juegoPerdido = false;
    }
}

function eventosDelTecaldo(event) {

    var letaRevisada = Text(event.key);
    var keyValue = letaRevisada.toUpperCase();

    firstTime = false;
    palabra.includes(keyValue) ? correctWords.push(keyValue) : wrongWords.push(keyValue);
    revicionDePalabra();
    finDeIntentos();
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
    drawGameBoard();
    if (juegoGanado) { desistir = true; }
    posX = pantalla.width / 2 - 95;
    posXWrongWords = pantalla.width / 2 - 45;
    drawBoy();
    drawPoste();
    completeboy.forEach(fn => { fn(); });
    console.log(correctWords);

    console.log(juegoGanado);

}

function keyEvent() {

    document.addEventListener("keydown", eventosDelTecaldo);


}







function TextInput(string) {//solo letras y numeros
    var out = '';
    //Se añaden las letras validas
    var filtro = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';//Caracteres validos

    for (var i = 0; i < string.length; i++)
        if (filtro.indexOf(string.charAt(i)) != -1)
            out += string.charAt(i);

    console.log(out);
    return out;
}
function Text(string) {//solo letras
    var out = '';
    var regExp = /^[a-z\s]+$/;//Caracteres validos
    var regExpMayus = /^[A-Z\s]+$/;

    if (regExp.test(string) || regExpMayus.test(string)) {

        out = string;
        return out;
    } else {
        return out;
    }

}