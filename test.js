
//este codigo sirve para capturar la tecla presionada y su codigo

document.addEventListener('keydown', (event) => {
    var keyValue = event.key;
    var codeValue = event.code;
  
    console.log("keyValue: " + keyValue);
    console.log("codeValue: " + codeValue);
  }, false);