// Consulta una API y obtiene todos los títulos de películas y los inserta
// en la etiqueta UL#list_movies

let url = 'https://swapi.co/api/films/?format=json';
$.get(url, function (data) {
  let films = data.results;
  for (let film of films) {
    $('ul#list_movies').append(`<li>${film.title}</li>`);
  }
});
