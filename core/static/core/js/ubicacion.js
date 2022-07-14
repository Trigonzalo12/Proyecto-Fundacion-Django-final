function findMe(){
    var output = document.getElementById('map');

    // Verificar si soporta geolocalizacion
    if (navigator.geolocation) {
        output.innerHTML = "<p>espere un momento</p>";
    }else{
        output.innerHTML = "<p>su navegador no soporta Geolocalizacion</p>";
    }

    //Obtenemos latitud y longitud
    function localizacion(posicion){

        var latitude = posicion.coords.latitude;
        var longitude = posicion.coords.longitude;

        var imgURL = "https://maps.googleapis.com/maps/api/staticmap?center="+latitude+","+longitude+"&size=600x300&markers=color:red%7C"+latitude+","+longitude+"&key=AIzaSyD1IH_7XELVMY_fFNucrU5MUKAuw-xEpbI";

        output.innerHTML ="<img src='"+imgURL+"'>";

        

    }

    function error(){
        output.innerHTML = "<p>no se pudo obtener su ubicación</p>";

    }

    navigator.geolocation.getCurrentPosition(localizacion,error);

}

$(document).ready(function(){
    var ubicacion = navigator.geolocation.getCurrentPosition(function(info){
        var latitud = info.coords.latitude;
        var longitud = info.coords.longitude;

        $.getJSON(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&lang=es&units=metric&appid=68a417ccd8493e33698b951ac65f49c4`, function(data){
            console.log(data)
            var html = `<h7 id="ciudad" class="text-capitalize">${data.name} (${data.sys.country}): ${data.weather[0].description} <h7>
                        <h7 id="temperatura" class="text-capitalize"> Temperatura: ${data.main.temp} humedad: ${data.main.humidity}% <h7>`;
            $('#info-clima').html(html);
        },'json').fail(function(){
            Swal.fire({
                title: 'Error',
                title: 'En estos momentos la api no funciona',
                icon: 'error',
                confirmButtonText: 'Continuar'
              });
        })
    })
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
  document.getElementById('card').classList.add('dark-mode-card')
  document.getElementById('card2').classList.add('dark-mode-card')
  document.getElementById('card').classList.remove('light-mode-card')
  document.getElementById('card2').classList.remove('light-mode-card')
  }else if( modoOscuro == true){
  var element = document.body;
  element.className = "light-mode";
  document.getElementById('card').classList.add('light-mode-card')
  document.getElementById('card2').classList.add('light-mode-card')
  document.getElementById('card').classList.remove('dark-mode-card')
  document.getElementById('card2').classList.remove('dark-mode-card')
  }

}

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


