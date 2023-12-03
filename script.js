document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("body").style.backgroundColor = "#e8f0f7";
});

let titleElements = document.querySelectorAll('#title');
titleElements.forEach((titleElement) => {
    titleElement.style.backgroundColor = '#6a6abf';
    titleElement.style.color = '#ffffff';
});
let profileElements = document.querySelectorAll('#profiletitle');
profileElements.forEach((profileElement) => {
    profileElement.style.color = '#6a6abf';
});

let h1Elements = document.querySelectorAll('h1');
h1Elements.forEach((h1Element) => {
    h1Element.style.backgroundColor = '#6a6abf';
    h1Element.style.color = '#ffffff';
});

let h3Elements = document.querySelectorAll('h3');
h3Elements.forEach((h3Element) => {
    h3Element.style.backgroundColor = '#6a6abf';
    h3Element.style.color = '#ffffff';
});