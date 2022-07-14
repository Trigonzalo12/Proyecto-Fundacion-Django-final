async function obtenerDatos(){
  const url = await fetch("https://randomuser.me/api/?results=6");
  const data = await url.json();
  const usuario0 = data.results[0];
  const usuario1 = data.results[1];
  const usuario2 = data.results[2];
  const usuario3 = data.results[3];
  const usuario4 = data.results[4];
  const usuario5 = data.results[5];
  mostrarUsuario(usuario0,usuario1,usuario2,usuario3,usuario4,usuario5)
}

function mostrarUsuario(usuario0,usuario1,usuario2,usuario3,usuario4,usuario5){
  const nombre0 = document.getElementById("nombre0");
  const nombre1 = document.getElementById("nombre1");
  const nombre2 = document.getElementById("nombre2");
  const nombre3 = document.getElementById("nombre3");
  const nombre4 = document.getElementById("nombre4");
  const nombre5 = document.getElementById("nombre5");

  const genero0 = document.getElementById("genero0");
  const genero1 = document.getElementById("genero1");
  const genero2 = document.getElementById("genero2");
  const genero3 = document.getElementById("genero3");
  const genero4 = document.getElementById("genero4");
  const genero5 = document.getElementById("genero5");
  
  const correo0 = document.getElementById("correo0");
  const correo1 = document.getElementById("correo1");
  const correo2 = document.getElementById("correo2");
  const correo3 = document.getElementById("correo3");
  const correo4 = document.getElementById("correo4");
  const correo5 = document.getElementById("correo5");
  
  const numero0 = document.getElementById("numero0");
  const numero1 = document.getElementById("numero1");
  const numero2 = document.getElementById("numero2");
  const numero3 = document.getElementById("numero3");
  const numero4 = document.getElementById("numero4");
  const numero5 = document.getElementById("numero5");

  const ciudad0 = document.getElementById("ciudad0");
  const ciudad1 = document.getElementById("ciudad1");
  const ciudad2 = document.getElementById("ciudad2");
  const ciudad3 = document.getElementById("ciudad3");
  const ciudad4 = document.getElementById("ciudad4");
  const ciudad5 = document.getElementById("ciudad5");
  
  const pais0 = document.getElementById("pais0");
  const pais1 = document.getElementById("pais1");
  const pais2 = document.getElementById("pais2");
  const pais3 = document.getElementById("pais3");
  const pais4 = document.getElementById("pais4");
  const pais5 = document.getElementById("pais5");

  const edad0 = document.getElementById("edad0");
  const edad1 = document.getElementById("edad1");
  const edad2 = document.getElementById("edad2");
  const edad3 = document.getElementById("edad3");
  const edad4 = document.getElementById("edad4");
  const edad5 = document.getElementById("edad5");

  const imagen0 = document.getElementById("imagen0");
  const imagen1 = document.getElementById("imagen1");
  const imagen2 = document.getElementById("imagen2");
  const imagen3 = document.getElementById("imagen3");
  const imagen4 = document.getElementById("imagen4");
  const imagen5 = document.getElementById("imagen5");


  nombre0.innerText = `${usuario0.name.first} ${usuario0.name.last}`;
  genero0.innerText = `${usuario0.gender}`;
  edad0.innerText = `${usuario0.dob.age}`;
  ciudad0.innerText = `${usuario0.location.city}`;
  pais0.innerText = `${usuario0.location.country}`;
  numero0.innerText = `${usuario0.phone}`;
  correo0.innerText = `${usuario0.email}`;
  imagen0.setAttribute('src', `${usuario0.picture.large}`);

  nombre1.innerText = `${usuario1.name.first} ${usuario1.name.last}`;
  genero1.innerText = `${usuario1.gender}`;
  edad1.innerText = `${usuario1.dob.age}`;
  ciudad1.innerText = `${usuario1.location.city}`;
  pais1.innerText = `${usuario1.location.country}`;
  numero1.innerText = `${usuario1.phone}`;
  correo1.innerText = `${usuario1.email}`;
  imagen1.setAttribute('src', `${usuario1.picture.large}`);

  nombre2.innerText = `${usuario2.name.first} ${usuario2.name.last}`;
  genero2.innerText = `${usuario2.gender}`;
  edad2.innerText = `${usuario2.dob.age}`;
  ciudad2.innerText = `${usuario2.location.city}`;
  pais2.innerText = `${usuario2.location.country}`;
  numero2.innerText = `${usuario2.phone}`;
  correo2.innerText = `${usuario2.email}`;
  imagen2.setAttribute('src', `${usuario2.picture.large}`);

  nombre3.innerText = `${usuario3.name.first} ${usuario3.name.last}`;
  genero3.innerText = `${usuario3.gender}`;
  edad3.innerText = `${usuario3.dob.age}`;
  ciudad3.innerText = `${usuario3.location.city}`;
  pais3.innerText = `${usuario3.location.country}`;
  numero3.innerText = `${usuario3.phone}`;
  correo3.innerText = `${usuario3.email}`;
  imagen3.setAttribute('src', `${usuario3.picture.large}`);

  nombre4.innerText = `${usuario4.name.first} ${usuario4.name.last}`;
  genero4.innerText = `${usuario4.gender}`;
  edad4.innerText = `${usuario4.dob.age}`;
  ciudad4.innerText = `${usuario4.location.city}`;
  pais4.innerText = `${usuario4.location.country}`;
  numero4.innerText = `${usuario4.phone}`;
  correo4.innerText = `${usuario4.email}`;
  imagen4.setAttribute('src', `${usuario4.picture.large}`);

  nombre5.innerText = `${usuario5.name.first} ${usuario5.name.last}`;
  genero5.innerText = `${usuario5.gender}`;
  edad5.innerText = `${usuario5.dob.age}`;
  ciudad5.innerText = `${usuario5.location.city}`;
  pais5.innerText = `${usuario5.location.country}`;
  numero5.innerText = `${usuario5.phone}`;
  correo5.innerText = `${usuario5.email}`;
  imagen5.setAttribute('src', `${usuario5.picture.large}`);
}

obtenerDatos();

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
  document.getElementById('li1').classList.add('oscuro')
  document.getElementById('li2').classList.add('oscuro')
  document.getElementById('li3').classList.add('oscuro')
  document.getElementById('li4').classList.add('oscuro')
  document.getElementById('li5').classList.add('oscuro')
  document.getElementById('li1').classList.remove('claro')
  document.getElementById('li2').classList.remove('claro')
  document.getElementById('li3').classList.remove('claro')
  document.getElementById('li4').classList.remove('claro')
  document.getElementById('li5').classList.remove('claro')
  }else if( modoOscuro == true){
  var element = document.body;
  element.className = "light-mode";
  document.getElementById('li1').classList.remove('oscuro')
  document.getElementById('li2').classList.remove('oscuro')
  document.getElementById('li3').classList.remove('oscuro')
  document.getElementById('li4').classList.remove('oscuro')
  document.getElementById('li5').classList.remove('oscuro')
  document.getElementById('li1').classList.add('claro')
  document.getElementById('li2').classList.add('claro')
  document.getElementById('li3').classList.add('claro')
  document.getElementById('li4').classList.add('claro')
  document.getElementById('li5').classList.add('claro')
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

