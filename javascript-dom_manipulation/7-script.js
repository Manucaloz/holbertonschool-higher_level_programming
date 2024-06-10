async function fetchData() {
    const response = await fetch("https://swapi-api.hbtn.io/api/films/?format=json");
    const data = await response.json();
    return data;
};

const ulMovies = document.querySelector("#list_movies");

fetchData().then(data => {
    const filmTitles = data.results.map(film => film.title);
    filmTitles.forEach(title => {
        const li = document.createElement("li");
        li.textContent = title;
        ulMovies.appendChild(li);
    });
});