const header = document.querySelector("header");
const updater = document.querySelector("#update_header");

function updateText() {
    header.textContent = "New Header!!";
};

updater.addEventListener("click", updateText);