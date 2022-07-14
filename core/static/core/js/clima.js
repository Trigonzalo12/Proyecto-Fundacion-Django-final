
$('#buscar_clima').on('click', function() {
    var ciudad = $('#ciudad_buscada').val();
    if(ciudad.trim().length > 0){
        var units = 'metric';
        var languaje = 'sp';
        var apiid = '5951ffe67e5458a5a6525f37160a06fd';
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&languaje=${languaje}&units=${units}&appid=${apiid}`;
    
        $.get(url, function(data) {
            var html = `<h4 id="ciudad" class="text-capitalize">${data.name}: ${data.weather[0].description}</h4>
                        <h4 id="temperatura">Temperatura: ${data.main.temp}°C</h4>
                        <h4 id="coordenadas">Coordenadas: ${data.coord.lat},${data.coord.lon}</h4>`;
            var iconurl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            var html_img = `<img class="img-clima" src="${iconurl}" alt="">`;
            $('#info_clima').removeClass('fw-bold text-danger').html(html);
            $('#icon_clima').html(html_img);
        },'json').fail(function() {
            $('#info_clima').addClass('fw-bold text-danger').html("<h4>No se encuentra la ciudad ingresada</h4>");
            $('#icon_clima').html("");
        });
    }
    else{
        alert("Debe ingresar una ciudad para su búsqueda...");
    }

});