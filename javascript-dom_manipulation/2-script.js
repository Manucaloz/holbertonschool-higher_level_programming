const header = document.querySelector("header");
const red_header = document.querySelector("#red_header");

red_header.addEventListener("click", function() {
    header.className = "red";
});