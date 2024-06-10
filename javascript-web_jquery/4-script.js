// Cambia la clase de la etiqueta HTML 'HEADER' cuando el usuario hace clic en la etiqueta
// etiqueta div#toggle_header

$('div#toggle_header').click(function () {
    $('header').ToggleClass('red');
});
