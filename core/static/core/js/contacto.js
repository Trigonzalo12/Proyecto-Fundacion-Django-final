/*********************
    JS CONTACTO.HTML
**********************/

const formulario = document.getElementById('form')
const inputs = document.querySelectorAll('#form input')
const tarea = document.querySelectorAll('#form textarea')
const select = document.querySelectorAll('#form select')


//Expresiones modelo
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{8,9}$/, // 8 o 9 numeros.
  rut : /^[0-9]+\-[0-9kK]$/,
  direccion:/^[a-zA-ZÀ-ÿ\s]+\#+[0-9]{2,4}$/,
  comentario: /^[a-zA-ZÀ-ÿ\s]{0,120}$/
}

//Estado de los campos (valido o invalido)
const valides = {
  select: false,
  nombre: false,
  apellido: false,
  numero: false,
  rut: false,
  direccion: false,
  correo: false,
  //password: false,
  comentario : false,
  check: false,
}


//VALIDACIONES

//validacion de formulario
const validarForm = (event) => {
  switch(event.target.name) {
    case "select":
        validarInput(expresiones.nombre, event.target, event.target.name);
    break;
    case "nombre":
        validarInput(expresiones.nombre, event.target, event.target.name);
    break;
    case "apellido":
        validarInput(expresiones.nombre, event.target, event.target.name);
    break;
    case "numero":
        validarInput(expresiones.telefono, event.target, event.target.name);
    break;
    case "rut":
        validarInput(expresiones.rut, event.target, event.target.name);
    break;
    case "direccion":
        validarInput(expresiones.direccion, event.target, event.target.name);
    break;
    /*case "password":
        validarInput(expresiones.password, event.target, event.target.name);
        validarPassword2();
    break;
    case "password2":
        validarPassword2();
    break;
    */
    case "correo":
        validarInput(expresiones.correo, event.target, event.target.name);
        //validarCorreo2();
    break;
    /*case "correo2":
        validarCorreo2();
    break;
    */
    case "comentario":
        validarInput(expresiones.comentario, event.target, event.target.name);
    break;
    case "check":
        validarCheck();
    break;
  }
}

//Validacion de campos
const validarInput = (expresiones, input , cuadro) => {
  if(expresiones.test(input.value)){
    document.getElementById(cuadro).classList.add('is-valid');
    document.getElementById(cuadro).classList.remove('is-invalid');
    valides[cuadro] = true;
  }else {
    document.getElementById(cuadro).classList.add('is-invalid');
    document.getElementById(cuadro).classList.remove('is-valid');
    valides[cuadro] = false;
  }
}

/*validacion de segunda contraseña
const validarPassword2 = () =>{
    const inPW1 = document.getElementById('password')
    const inPW2 = document.getElementById('password2')

    if(inPW1.value !== inPW2.value){
      document.getElementById('password2').classList.add('is-invalid');
      document.getElementById('password2').classList.remove('is-valid');
      valides['password'] = false;
    }else if (inPW2.value == ""){
      document.getElementById('password2').classList.add('is-invalid');
      document.getElementById('password2').classList.remove('is-valid');
      valides['password'] = false;
    }else {
      document.getElementById('password2').classList.add('is-valid');
      document.getElementById('password2').classList.remove('is-invalid');
      valides['password'] = true;
    }
}
*/
/*Validacion de segundo correo
const validarCorreo2 = () =>{
  const inCorreo = document.getElementById('correo')
  const inCorreo2 = document.getElementById('correo2')

  if(inCorreo.value !== inCorreo2.value){
    document.getElementById('correo2').classList.add('is-invalid');
    document.getElementById('correo2').classList.remove('is-valid');
    valides['correo'] = false;
  }else if(inCorreo2.value == ""){
    document.getElementById('correo2').classList.add('is-invalid');
    document.getElementById('correo2').classList.remove('is-valid');
    valides['correo'] = false;
  }else {
    document.getElementById('correo2').classList.add('is-valid');
    document.getElementById('correo2').classList.remove('is-invalid');
    valides['correo'] = true;
  }
}
*/
//Validacion de checkbox
const validarCheck = () =>{
  const check = form.check.checked
  if(check ){
    document.getElementById('invalidCheck').classList.add('is-valid');
    document.getElementById('invalidCheck').classList.remove('is-invalid');
    valides['check'] = true;
  }else{
    document.getElementById('invalidCheck').classList.add('is-invalid');
    document.getElementById('invalidCheck').classList.remove('is-valid');
    valides['check'] = false;
  }
  
}
/*
//Validacion de select
const validarSelect = () =>{
  const valorSelect = form.select.value

  if(valorSelect == ""){
    document.getElementById('select').classList.add('is-invalid');
    document.getElementById('select').classList.remove('is-valid');
    valides['select'] = false;
  }else {
    document.getElementById('select').classList.add('is-valid');
    document.getElementById('select').classList.remove('is-invalid');
    valides['select'] = true;
  }
}
*/
//FIN DE VALIDACIONES


//Loop para los inputs
inputs.forEach((input) => {
  input.addEventListener('keyup',validarForm)
  input.addEventListener('blur',validarForm)

});

//Loop para text area
tarea.forEach((textarea) => {
  textarea.addEventListener('keyup',validarForm)
  textarea.addEventListener('blur',validarForm)

});

//Loop para el select
select.forEach((select) =>{
  select.addEventListener('blur',validarForm)
});


//Guardar datos y alerta
const alertaInfo = () =>{
  const nom = document.getElementById('nombre').value
  const ape = document.getElementById('apellido').value
  const num = document.getElementById('numero').value
  const rt = document.getElementById('rut').value
  const dir = document.getElementById('direccion').value
  const cor = document.getElementById('correo').value
  //const pass = document.getElementById('password').value
  const comen = document.getElementById('comentario').value
  const sel = form.select.value

  alert('Informacion registrada\nNombre:'+nom +'\nApellido: '+ ape+
      '\nNumero: '+num+'\nRut: '+rt+'\nDireccion: '+dir+
      '\nCorreo: '+cor+'\nContraseña: '+pass+'\nComentario: '+comen+
      '\nOpcion Seleccionada: '+sel
  ); 
}

//Funcion limpiar formulario
const limpiarForm = () => {
      form.reset();
  
      inputs.forEach((input) => {
        input.classList.remove('is-valid')
      });
      document.getElementById('select').classList.remove('is-valid');
      document.getElementById('comentario').classList.remove('is-valid');

      
}


//Evita el enviar datos incompletos

(function () {
  formulario.addEventListener('submit', (event) => {
  
    if(valides.select && valides.nombre && valides.apellido && valides.numero 
      && valides.rut && valides.direccion && valides.correo && valides.comentario && valides.check ){
      }
      else{
        event.preventDefault();
      }
    } 
  );
})();


/*
$('.links').click(function() {
  $(this).prop('target','_blank');
  alert("Cuidado estas abandonando nuestra pagina");
});
*/

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




/*********************
    JS FOOTER
**********************/
/*
const correoFooter = document.getElementById("exampleInputEmail1")

correoFooter.forEach((input) => {
  input.addEventListener('keyup',() => {console.log("a");})
  input.addEventListener('blur',() => {console.log("b");})

});

const validarCorreoFooter = (e) => {
  if(expresiones.correo.test(e.target.name.value)){
    document.getElementById("exampleInputEmail1").classList.add('is-valid');
    document.getElementById("exampleInputEmail1").classList.remove('is-invalid');
    
  }else {
    document.getElementById("exampleInputEmail1").classList.add('is-invalid');
    document.getElementById("exampleInputEmail1").classList.remove('is-valid');
    
  }
}
*/