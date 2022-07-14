
    $.get("http://127.0.0.1:8000/api/expertos?format=json",function(respuesta){

        
        let nombre1 = (respuesta[0])
        let nombre2 = (respuesta[1])
        let nombre3 = (respuesta[2])
        let nombre4 = (respuesta[3])
        console.log(nombre2)

        $("#nombre1").text(nombre1.nombre)
        $('#descripcion1').text(nombre1.descripcion)
        $("#nombre2").text(nombre2.nombre)
        $('#descripcion2').text(nombre2.descripcion)
        $("#nombre3").text(nombre3.nombre)
        $('#descripcion3').text(nombre3.descripcion)
        $("#nombre4").text(nombre4.nombre)
        $('#descripcion4').text(nombre4.descripcion)
    },"json")   