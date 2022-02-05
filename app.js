var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
var posX = pantalla.width / 2 - 95;
var posXWrongWords = pantalla.width / 2 -45;
var posY = pantalla.height;

var numeroDeClicks = 0;
var desistir = false;
var firstTime = true;

var palabras = ["CABALLO","PERRO","GATO","LAGARTO","EDIFICIO","COCINA"];
var palabraNueva = "";
var palabra = "";
var correctWords = [];
var wrongWords = [];
var completeboy = [];
// ######################################## PARTE GRAFICA #################
var btnIniciarJuego = document.querySelector(".btn_Iniciar_Juego");
var btnAgregarNuevaPalabra = document.querySelector(".btn_agregar_palabra");
var btnIngresarPalabra = document.querySelector(".text-ingrese");
var campoDeTexto = document.querySelector(".campo-text-ingrese");
var btnGuardarYEmpezar = document.querySelector(".btn_guardar_empezar");
var canvasOn = document.querySelector(".canvas");
var btnCancel = document.querySelector(".btn_cancelar");
var btnDesistir = document.querySelector(".btn_desistir");


      

// #####################################################################################
// #####################################################################################

function habilitarTableroDeJuego(){
   
    if(campoDeTexto.value != ""){
        palabraNueva = campoDeTexto.value;
        palabra = palabraNueva.toUpperCase();


    }else{
        sortWord();
    }
    

    document.querySelector(".btns_Pagina_Principal").classList.add("btns_Pagina_Principal-off");
    document.querySelector(".btns_pantalla_del_juego").classList.add("btns_pantalla_del_juego-on");
    document.querySelector(".canvas").classList.add("canvas-on");

    document.querySelector(".btns_de_ingresar_palabra").classList.remove("btns_de_ingresar_palabra-on");
    document.querySelector(".maximo_de_caracteres").classList.remove("maximo_de_caracteres-on");
    campoDeTexto.classList.remove("campo-text-ingrese-on");
    document.querySelector(".text-ingrese").classList.remove("text-ingrese-on");
    
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

function paginaPrincipal(){
    document.querySelector(".btns_Pagina_Principal").classList.remove("btns_Pagina_Principal-off");
    document.querySelector(".btns_de_ingresar_palabra").classList.remove("btns_de_ingresar_palabra-on");
    document.querySelector(".maximo_de_caracteres").classList.remove("maximo_de_caracteres-on");
    document.querySelector(".text-ingrese").classList.remove("text-ingrese-on");
    campoDeTexto.classList.remove("campo-text-ingrese-on");

    document.querySelector(".btns_Pagina_Principal").classList.remove("btns_Pagina_Principal-off");
    document.querySelector(".btns_pantalla_del_juego").classList.remove("btns_pantalla_del_juego-on");
    document.querySelector(".canvas").classList.remove("canvas-on");

    campoDeTexto.value = "";
    console.log(campoDeTexto.value);

}


btnDesistir.addEventListener("click", ()=>{

    
    if(numeroDeClicks == 0){
                
        desistir  = true;
        drawGameBoard();
        
    }else{
        
        paginaPrincipal();
    }
    
    numeroDeClicks = 1;

});


    
    
    btnIniciarJuego.onclick = habilitarTableroDeJuego;
    btnAgregarNuevaPalabra.onclick = pantallaDePalabraNueva;
    btnIngresarPalabra.onclick =  habilitarCampoDeTexto;
    btnGuardarYEmpezar.onclick = habilitarTableroDeJuego;
    btnCancel.onclick = paginaPrincipal;
   
    
    
    


