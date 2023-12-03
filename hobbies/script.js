document.addEventListener("DOMContentLoaded", function() {
    
    document.querySelector("body").style.backgroundColor = "#e8f0f7";
});

let h2Elements = document.querySelectorAll('h2');
h2Elements.forEach((h2Element) => {
    h2Element.style.color = '#6a6abf';
});

let h1Elements = document.querySelectorAll('h1');
h1Elements.forEach((h1Element) => {
    h1Element.style.color = '#ffffff';
});
