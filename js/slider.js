'use strict'

window.addEventListener("load",function(){
    var imagenes = document.getElementById("slider");

    var contador = 0;

    var galeria = [];
    // galeria[0] = "../imagenes/WhatsApp Image 2020-08-09 at 12.42.28 (2).jpeg";
    // galeria[1] = "../imagenes/WhatsApp Image 2020-08-09 at 12.42.28 (1).jpeg";
    galeria[0] = "../imagenes/smarthome.jpg" ;
    galeria[1] = "../imagenes/smart-home-1554290756ULT.jpg";
    galeria[2] = "../imagenes/maxresdefault.jpg";
    galeria[3] = "../imagenes/camaras-de-seguridad-768x539.jpg";

    setInterval(function(){
        imagenes.style.objectFit = "cover";
        imagenes.src = galeria[contador];
        if(contador < galeria.length - 1){
            contador++;
        }else{
            contador = 0;
        }
    }, 3000);
});


// window.addEventListener("load",function(){
//     console.log("Documento cargado");

//     // var slider  = document.getElementsByClassName("slider");
//     var slider = document.getElementById("slider-imagen");
//     var tiempo = 2000;
//     var tiempo2= 0;

    
//     var galeria = [];
//     galeria[0] = "../imagenes/camara-came.jpeg" ;
//     galeria[1] = "../imagenes/camara-commax.jpeg";
//     galeria[2] = "../imagenes/camara-epcom.jpeg";
//     galeria[3] = "../imagenes/camara-hikvision.jpeg";
//     // galeria[4] = "../imagenes/camara-jhua.jpeg";
//     // galeria[5] = "../imagenes/camara-unv.jpeg";

//     var indice = 0;

//     //Cambiar imagenes
//     function cambiarImagenes(){
//         slider.src = galeria[indice];
//         if(indice < galeria.length - 1){
//             galeria[indice].style.height;
//             indice++;
//         }else{
//             indice = 0;
//         }       
//     }
//     //Controlar la primera imagen
//     function controlimg1(){
//         slider.src = galeria[indice];
       
//         if(indice == 0){
//             setInterval(galeria[0],tiempo2);
//         }
//     }

//     controlimg1();
//     setInterval(cambiarImagenes,tiempo);
// });