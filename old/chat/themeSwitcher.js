let themeSwitchButton = document.getElementById("themeSwitchButton");
let themeSwitchButtonImg = document.getElementById("img")

let style = document.getElementById("style");
let body = document.getElementById("body")

if (localStorage.getItem("theme") === "../black-style.css" || localStorage.getItem("theme") === "../white-style.css") {
    style.setAttribute("href", localStorage.getItem("theme"));
}
else {
    style.setAttribute("href", "../black-style.css")
}


themeSwitchButton.addEventListener("click", themeSwitch)
function themeSwitch() {
    if (style.getAttribute("href") === "../black-style.css") {
        style.setAttribute("href", "../white-style.css");
        themeSwitchButtonImg.setAttribute("src", "https://flectone.net/res/theme-black.png");
        localStorage.setItem("theme", "../white-style.css");
    }
    else {
        style.setAttribute("href", "../black-style.css");
        localStorage.setItem("theme", "../black-style.css");
        themeSwitchButtonImg.setAttribute("src", "https://flectone.net/res/theme-white.png");
    }
}

