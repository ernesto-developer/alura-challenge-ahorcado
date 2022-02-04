var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
var palabras = ["CABALLO","PERRO","GATO","LAGARTO","EDIFICIO","COCINA"];
var palabra = "";
var posX = pantalla.width / 2 - 95;
var posXWrongWords = pantalla.width / 2 -45;
var posY = pantalla.height;
var correctWords = [];
var wrongWords = [];
var firstTime = true;
var completeboy = [];
// ######################################## PARTE GRAFICA #################
var btnIniciarJuego = document.querySelector(".btn_Iniciar_Juego");
var btnAgregarNuevaPalabra = document.querySelector(".btn_agregar_palabra");
var btnIngresarPalabra = document.querySelector(".text-ingrese");
var campoDeTexto = document.querySelector(".campo-text-ingrese");
var btnGuardarYEmpezar = document.querySelector(".btn_guardar_empezar");
var canvasOn = document.querySelector(".canvas");





function drawPoste(){


    pincel.beginPath()
    pincel.moveTo(posX +220,posY -476);
    pincel.lineTo(posX +220,posY -500);
    pincel.lineTo(posX + 50,posY -500);
    pincel.lineTo(posX + 50,posY -140);
    pincel.lineTo(posX +220,posY -140);
    pincel.lineTo(posX - 40,posY -140);
    pincel.strokeStyle = "#0A3871";
    pincel.lineWidth = 5;
    pincel.lineCap = "round";
    pincel.stroke();


}

function boyHead(){

    pincel.beginPath();
    pincel.strokeStyle = "#0A3871"
    pincel.arc(posX +220,posY-435,40,0,2*Math.PI);
    pincel.stroke();

}
function boybody(){

    pincel.beginPath(),
 
    pincel.moveTo(posX +220,posY-395);
    pincel.lineTo(posX +220,posY - 280);

    pincel.strokeStyle = "#0A3871";
    pincel.stroke();

}
function boyLeftArm(){
    pincel.beginPath(),
 
    pincel.moveTo(posX +220,posY-375);
    pincel.lineTo(posX +155,posY - 310);

    pincel.strokeStyle = "#0A3871";
    pincel.stroke();

}
function boyRightArm(){
    pincel.beginPath(),
 
    pincel.moveTo(posX +220,posY-375);
    pincel.lineTo(posX +285,posY - 310);

    pincel.strokeStyle = "#0A3871";
    pincel.stroke();
}
function boyLeftFoot(){
    pincel.beginPath(),
 
    pincel.moveTo(posX +220,posY-280);
    pincel.lineTo(posX +155,posY - 200);

    pincel.strokeStyle = "#0A3871";
    pincel.stroke();
}
function boyRightFoot(){
    pincel.beginPath(),
 
    pincel.moveTo(posX +220,posY-280);
    pincel.lineTo(posX +285,posY - 200);

    pincel.strokeStyle = "#0A3871";
    pincel.stroke();
}

function drawBoy(){


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



function gridBoard(){


    pincel.strokeRect(0,0,1080,600);
    pincel.strokeStyle = "red";
    pincel.moveTo(540,0);
    pincel.lineTo(540,600);
    pincel.stroke();
    pincel.strokeStyle = "red";
    pincel.moveTo(0,300);
    pincel.lineTo(1080,300);
    pincel.stroke();


}    

function sortWord(){

    var numeroAsar =  Math.floor(Math.random() * palabras.length);
    palabra = palabras[numeroAsar];


}

function drawLineas(x){
    

    pincel.beginPath();
    pincel.moveTo(x,posY - 50);
    pincel.lineTo(x + 40,posY - 50 );
    pincel.strokeStyle = "#0A3871";
    pincel.lineWidth = 4;
    pincel.stroke();

}


function drawWord(x , i){
        
        pincel.beginPath();
        correctWords.includes(palabra[i])? pincel.fillStyle = "#0A3871" :  pincel.fillStyle = "transparent";
        pincel.font = "60px serif";
        pincel.fillText(palabra[i],x,posY -60);


}
function drawWrongWord(){


    for (let i = 0; i < wrongWords.length; i++) {
        
        posXWrongWords = posXWrongWords + 40;

        pincel.beginPath();
        pincel.fillStyle = "#495057";
        pincel.font = "20px bold";
        pincel.fillText(wrongWords[i],posXWrongWords,posY-10);
    }


}

function centradoDePalbra(array, textPos){

switch (array.length) {

    case 1:
        textPos == 1 ? posX : posXWrongWords;
        break;
    case 2:
        textPos == 1 ? posX : posXWrongWords-= 20;
        break;
    case 3:
         textPos == 1 ?  posX-=25: posXWrongWords-=45;
        break;
    case 4:
       textPos == 1 ? posX-=50 : posXWrongWords-=65 ;
        break;
    case 5:
       textPos == 1 ? posX-= 75 : posXWrongWords-= 80;
        break;
    case 6:
       textPos == 1 ? posX-=100 : posXWrongWords-=100;
        break;
    case 7:
       textPos == 1 ? posX-=125 : posXWrongWords-=125;
        break;
    case 8:
       textPos == 1 ? posX-=150 : posXWrongWords-=150;
        break;
    default:
        break;
}

}

function drawGameBoard(){

    centradoDePalbra(palabra, 1);
    centradoDePalbra(wrongWords, 2);
    drawWrongWord();

    for(var i = 0; i < palabra.length; i++){
        
         
             posX = posX+50;
             drawLineas(posX);
             drawWord(posX,i);
             
             
             
            }

   
   
}   
      
      
function keyEvent(){
   

        
        document.addEventListener("keydown", (event) => {
        
                var keyValue = event.key.toUpperCase();
                firstTime = false;
                palabra.includes(keyValue)?correctWords.push(keyValue):wrongWords.push(keyValue);
                
          pincel.clearRect(0,0,pantalla.width,pantalla.height);
           drawGameBoard();
           posX = pantalla.width / 2 - 95;
           posXWrongWords = pantalla.width / 2 -45;  
          // gridBoard();
          drawBoy();
           drawPoste();
           completeboy.forEach( fn => { fn(); });
           
    
    
    } ) ;

    
            
        }

// #####################################################################################
// #####################################################################################

function habilitarTableroDeJuego(){

    document.querySelector(".btns_Pagina_Principal").classList.add("btns_Pagina_Principal-off");
    document.querySelector(".btns_pantalla_del_juego").classList.add("btns_pantalla_del_juego-on");
    document.querySelector(".canvas").classList.add("canvas-on");

    document.querySelector(".btns_de_ingresar_palabra").classList.remove("btns_de_ingresar_palabra-on");
    document.querySelector(".maximo_de_caracteres").classList.remove("maximo_de_caracteres-on");
    campoDeTexto.classList.remove("campo-text-ingrese-on");



}

function pantallaDePalabraNueva(){

    document.querySelector(".btns_Pagina_Principal").classList.add("btns_Pagina_Principal-off");
    document.querySelector(".btns_de_ingresar_palabra").classList.add("btns_de_ingresar_palabra-on");
    document.querySelector(".maximo_de_caracteres").classList.add("maximo_de_caracteres-on");
    document.querySelector(".text-ingrese").classList.add("text-ingrese-on");

}

function habilitarCampoDeTexto(){

    campoDeTexto.classList.add("campo-text-ingrese-on");
    campoDeTexto.focus();
    btnIngresarPalabra.classList.remove("text-ingrese-on");
}





sortWord();




    if(firstTime){
        drawGameBoard();
        keyEvent();
        posX = pantalla.width / 2 - 95;
        posXWrongWords = pantalla.width / 2 -45;            
        // gridBoard();
        drawPoste();
        
       
    
    }else{
        keyEvent();
    }


    
    
    btnIniciarJuego.onclick = habilitarTableroDeJuego;
    btnAgregarNuevaPalabra.onclick = pantallaDePalabraNueva;
    btnIngresarPalabra.onclick =  habilitarCampoDeTexto;
    btnGuardarYEmpezar.onclick = habilitarTableroDeJuego;
    
    
    
    
    // TODO: HACER QUE CUANDO SE HAGA CLICK EN EL BOTON DE EMPEZAR Y GUARDAR SE EJECUTE LA FUNCION
    // DE keyevent PARA CORREGIR EL PROBLEMA DE LAS LETRAS


