$(".navbar-nav li a").on("click", function(event) {

    var sideBar = $('#menu').width();
    var target = $(this).attr("href");

    $("html, body").stop().animate({
        scrollLeft: $(target).offset().left - sideBar,
        scrollTop: $(target).offset().top
    }, 600, 'easeInOutExpo');
});

function paginaUno() {
    document.getElementById("bloque1").style.display = "block";
    document.getElementById("bloque2").style.display = "none";
}

function paginaDos() {
    document.getElementById("bloque1").style.display = "none";
    document.getElementById("bloque2").style.display = "block";
}

var listaPalabras = ['Tecnología', 'Ciberseguridad', 'IoT', 'Robótica', 'AI', 'Ciencia de datos', 'Blockchain', 'Electrónica'],
    espacio = document.getElementById('palabra'),
    contenidoEspacio = espacio.innerHTML,
    agregandoPalabra = false,
    counter = 1;

setInterval(function() {

    if (contenidoEspacio.length > 0 && !agregandoPalabra) {
        espacio.innerHTML = contenidoEspacio.slice(0, -1);
        contenidoEspacio = espacio.innerHTML;
    } else {
        agregandoPalabra = true;
    }

    if (agregandoPalabra) {
        if (contenidoEspacio.length < listaPalabras[counter].length) {
            espacio.innerHTML = listaPalabras[counter].slice(0, contenidoEspacio.length + 1);
            contenidoEspacio = espacio.innerHTML;
        } else {
            if (counter < listaPalabras.length) {
                counter++
            }
            agregandoPalabra = false;
        }
    }

    if (counter == listaPalabras.length) {
        counter = 0;
    }

}, 150);