async function fetchCharName() {
    const response = await fetch("https://swapi-api.hbtn.io/api/people/5/?format=json");
    const data = await response.json();
    return data.name;
}

fetchCharName().then(name => {
    const character = document.querySelector("#character");
    character.textContent = name;
});