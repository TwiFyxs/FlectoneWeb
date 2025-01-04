let themeSwitchButton = document.getElementById("button");
let style = document.getElementById("style");
let themeSwitchButtonImg = document.getElementById("button")


if (localStorage.getItem("theme") === "black-style.css" || localStorage.getItem("theme") === "white-style.css") {
    style.setAttribute("href", localStorage.getItem("theme"));
}
else {
    style.setAttribute("href", "black-style.css")
    themeSwitchButtonImg.setAttribute("src", "https://flectone.net/res/theme-white.png")
}


themeSwitchButton.addEventListener("click", themeSwitch)
function themeSwitch() {
    if (style.getAttribute("href") === "black-style.css") {
        style.setAttribute("href", "white-style.css");
        themeSwitchButtonImg.setAttribute("src", "https://flectone.net/res/theme-black.png")
        localStorage.setItem("theme", "white-style.css");
    }
    else {
        style.setAttribute("href", "black-style.css");
        themeSwitchButtonImg.setAttribute("src", "https://flectone.net/res/theme-white.png")
        localStorage.setItem("theme", "black-style.css");
    }
}

