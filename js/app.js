var obtenerUbicacion = function (e) {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(mostrarPosicion);
	} else {
		alert("Geolocalización no es soportado en tu navegador");
	}
};

var mostrarPosicion = function (posicion) {
	var coordenadas = {
		lat: posicion.coords.latitude,
		lng: posicion.coords.longitude
	};
	mostrarMapa(coordenadas);
};

var mostrarMapa = function (coordenadas) {
	var map = new google.maps.Map($('.map')[0], {
      zoom: 15,
      center: coordenadas
    });
    var marker = new google.maps.Marker({
      position: coordenadas,
      map: map
    });
}

var cargarPagina = function() {
  obtenerUbicacion();
  $(".restaurant").click(cambiarUbicacion);
};

var restaurantes = [
  {
    "nombre": "Don Asado",
    "comida": "Uruguaya",
    "foto": "https://media-cdn.tripadvisor.com/media/photo-s/06/dc/10/0c/don-asado.jpg",
    "direccion": "Calle Río Lerma No. 210, Cuauhtémoc, 06500 Ciudad de México, CDMX",
    "lat": "19.4274431",
    "lng": "-99.1708638"
  },
  {
    "nombre": "Tori Tori",
    "comida": "Japonesa",
    "foto": "http://www.gastronosfera.com/sites/default/files/uploads/cocina-japonesa4.jpg",
    "direccion": "Temístocles No. 59, Miguel Hidalgo, Polanco, 11550 Ciudad de México, CDMX",
    "lat": "19.430397",
    "lng": "-99.19214729999999"
  },
];

function cambiarUbicacion() {
  var latitud = $(this).data("latitud");
  var longitud = $(this).data("longitud");

  var coordenadas = {
    lat: latitud,
    lng: longitud
  };

  console.log(coordenadas);
  mostrarMapa(coordenadas);
}

$(document).ready(cargarPagina);
