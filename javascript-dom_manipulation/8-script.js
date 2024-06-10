async function fetchHello() {
    const response = await fetch("https://hellosalut.stefanbohacek.dev/?lang=fr");
    const data = await response.json();
    return data;
};

document.addEventListener("DOMContentLoaded", function() {
    const helloEle = document.querySelector("#hello");
    fetchHello().then(data => {
        const textNode = document.createTextNode(data.hello);
        helloEle.appendChild(textNode);
    })
})