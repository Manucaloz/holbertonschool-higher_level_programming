// Obtiene y sustituye el nombre de los datos de la API y sustituye el nombre
// del carácter en el texto de la etiqueta DIV#character

let url = 'https://swapi.co/api/people/5/?format=json';
$.get(url, function (data, stat) {
  $('div#character').text(data.name);
});