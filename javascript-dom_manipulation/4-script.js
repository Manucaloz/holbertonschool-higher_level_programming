const addItem = document.querySelector("#add_item");
const myList = document.querySelector(".my_list");

function createLi() {
    const li = document.createElement("li");
    li.textContent ="Item";
    myList.appendChild(li);
}
addItem.addEventListener("click", createLi);