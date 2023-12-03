document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("h1").style.color = "white";
    document.querySelector("h1").style.backgroundColor = "#27005D";
});

let h3Elements = document.querySelectorAll('h3');
h3Elements.forEach((h3Element) => {
    h3Element.style.color = '#097969';
});