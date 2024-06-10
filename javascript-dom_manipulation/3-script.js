const header = document.querySelector("header");
const toggleSelector = document.querySelector("#toggle_header");

toggleSelector.addEventListener("click", function() {
    header.classList.toggle("green");
    header.classList.toggle("red");
});