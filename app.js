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





function drawPoste(){


    pincel.beginPath()
    pincel.moveTo(posX +220,posY -450);
    pincel.lineTo(posX +220,posY -500);
    pincel.lineTo(posX + 50,posY -500);
    pincel.lineTo(posX + 50,posY -140);
    pincel.lineTo(posX +220,posY -140);
    pincel.lineTo(posX - 40,posY -140);
    pincel.lineTo(posX +220,posY -140);
    pincel.strokeStyle = "blue";
    pincel.stroke();


}

function boyHead(){

    pincel.beginPath();
    pincel.fillStyle = "orange"
    pincel.arc(posX +220,posY-435,40,0,2*Math.PI);
    pincel.fill();

}
function boybody(){

    pincel.beginPath(),
 
    pincel.moveTo(posX +220,posY-435);
    pincel.lineTo(posX +220,posY - 280);

    pincel.strokeStyle = "orange";
    pincel.stroke();

}
function boyLeftArm(){
    pincel.beginPath(),
 
    pincel.moveTo(posX +220,posY-375);
    pincel.lineTo(posX +155,posY - 310);

    pincel.strokeStyle = "orange";
    pincel.stroke();

}
function boyRightArm(){
    pincel.beginPath(),
 
    pincel.moveTo(posX +220,posY-375);
    pincel.lineTo(posX +285,posY - 310);

    pincel.strokeStyle = "orange";
    pincel.stroke();
}
function boyLeftFoot(){
    pincel.beginPath(),
 
    pincel.moveTo(posX +220,posY-280);
    pincel.lineTo(posX +155,posY - 200);

    pincel.strokeStyle = "orange";
    pincel.stroke();
}
function boyRightFoot(){
    pincel.beginPath(),
 
    pincel.moveTo(posX +220,posY-280);
    pincel.lineTo(posX +285,posY - 200);

    pincel.strokeStyle = "orange";
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
    pincel.strokeStyle = "black";
    pincel.stroke();

}


function drawWord(x , i){
        
        pincel.beginPath();
        correctWords.includes(palabra[i])? pincel.fillStyle = "red" :  pincel.fillStyle = "transparent";
        pincel.font = "60px serif";
        pincel.fillText(palabra[i],x,posY -60);


}
function drawWrongWord(){


    for (let i = 0; i < wrongWords.length; i++) {
        
        posXWrongWords = posXWrongWords + 40;

        pincel.beginPath();
        pincel.fillStyle = "black";
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
           drawPoste();
           drawBoy();
           completeboy.forEach( fn => { fn(); });
           


} ) ;
            
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





