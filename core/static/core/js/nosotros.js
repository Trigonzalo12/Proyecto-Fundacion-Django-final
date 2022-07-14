$(document).ready(function() {
    //
    $('.parrafo-accion01').hide();
    $('.Ocultar1').hide();
    $('.Mostrar1').on('click',function(){
        $('.parrafo-accion01').show();
        $('.Ocultar1').show();  
    });
    $('.Ocultar1').on('click',function(){
        $('.parrafo-accion01').hide();
        $('.Ocultar1').hide();
    });
    $('.parrafo-accion02').hide();
    $('.Ocultar2').hide();
    $('.Mostrar2').on('click',function(){
        $('.parrafo-accion02').show();
        $('.Ocultar2').show();
    });
    $('.Ocultar2').on('click',function(){
        $('.parrafo-accion02').hide();
        $('.Ocultar2').hide();
    });
    $('.parrafo-accion03').hide();
    $('.Ocultar3').hide();
    $('.Mostrar3').on('click',function(){
        $('.parrafo-accion03').show();
        $('.Ocultar3').show();
    });
    $('.Ocultar3').on('click',function(){
        $('.parrafo-accion03').hide();
        $('.Ocultar3').hide();
    });
    $('.parrafo-accion04').hide();
    $('.Ocultar4').hide();
    $('.Mostrar4').on('click',function(){
        $('.parrafo-accion04').show();
        $('.Ocultar4').show();
    });
    $('.Ocultar4').on('click',function(){
        $('.parrafo-accion04').hide();
        $('.Ocultar4').hide();
    });
    
// Funcion Relog
    function clock(){
        var today = new Date();

        var hours = today.getHours();
        var minutes = today.getMinutes();
        var seconds = today.getSeconds();

        if (hours < 10){
          hours = "0" + hours;
        }

        if(minutes < 10){
        minutes = "0" + minutes;
      }

      if(seconds < 10){
        seconds = "0" + seconds;
      }

        document.querySelector(".hours").innerHTML = hours;
        document.querySelector(".minutes").innerHTML = minutes;
        document.querySelector(".seconds").innerHTML = seconds;
      }

      var updateClock = setInterval(clock,1000);


      var today = new Date();
      const dayNumber = today.getDate();
      const year = today.getFullYear();
      const dayName = today.toLocaleDateString("default",{weekday:"long"});
      const monthName = today.toLocaleDateString("default",{month:"short"});

      document.querySelector(".month-name").innerHTML = monthName
      document.querySelector(".day-name").innerHTML = dayName
      document.querySelector(".day-number").innerHTML = dayNumber
      document.querySelector(".year").innerHTML = year

    })

 //Modo escuro
 var modoOscuro = true;

 function darkMode() {
   modoOscuro = false;
   cambiarModo();
 }
 function lightMode() {
   modoOscuro = true;
   cambiarModo();
 }
 
 const cambiarModo = () => {
   if (modoOscuro == false){
   var element = document.body;
   element.className = "dark-mode";
   }else if( modoOscuro == true){
   var element = document.body;
   element.className = "light-mode";
   }
 
 }
