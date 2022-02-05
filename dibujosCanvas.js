
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



function drawLineas(x){
    

    pincel.beginPath();
    pincel.moveTo(x,posY - 50);
    pincel.lineTo(x + 40,posY - 50 );
    pincel.strokeStyle = "#0A3871";
    pincel.lineWidth = 4;
    pincel.stroke();

}