function darkMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Dark Mode is ON";
  }
  function lightMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Dark Mode is OFF";
  }

  $('.links').click(function() {
    $(this).prop('target','_blank');
    alert("Cuidado estas abandonando nuestra pagina");
});



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


   

