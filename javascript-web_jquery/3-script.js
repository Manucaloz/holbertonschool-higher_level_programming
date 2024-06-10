// Utiliza la API de jQuery para añadir una clase roja a la etiqueta de encabezado y volverla
// rojo cuando se hace clic en la etiqueta div#red_header

$('div#red_header').click(function () {
    $('header').addClass('red');
});
