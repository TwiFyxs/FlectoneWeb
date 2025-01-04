let themeSwitchButton = document.getElementById("themeSwitchButton");
let themeSwitchButtonImg = document.getElementById("themeSwitchButtonImg")
let exampleImg = document.getElementById('img');
let style = document.getElementById("style");
let body = document.getElementById("body")

if (localStorage.getItem("theme") === "../black-style.css" || localStorage.getItem("theme") === "../white-style.css") {
    style.setAttribute("href", localStorage.getItem("theme"));
}
else {
    style.setAttribute("href", "../black-style.css")
}

if (style.getAttribute('href') === "../black-style.css") {
    themeSwitchButtonImg.setAttribute("src", "/res/theme-white.png");
    exampleImg.setAttribute("src", "/res/example.jpg");
}
else {
    themeSwitchButtonImg.setAttribute("src", "/res/theme-black.png");
    exampleImg.setAttribute("src", "/res/example-white.png");
}

themeSwitchButton.addEventListener("click", themeSwitch)
function themeSwitch() {
    if (style.getAttribute("href") === "../black-style.css") {
        style.setAttribute("href", "../white-style.css");
        localStorage.setItem("theme", "../white-style.css");
    }
    else {
        style.setAttribute("href", "../black-style.css");
        localStorage.setItem("theme", "../black-style.css");
    }
}

