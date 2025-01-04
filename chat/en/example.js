let img = document.querySelector(".img");
let example = document.querySelector(".example");
let value = 1;
let max = 6;
let description = document.querySelector("#description")



function right() {
    value++;
    if (value > max) {
        value = 1;
    }
    switch (value) {
        case 1: 
        description.innerText = "Chat overhead";
        description.setAttribute('style', 'opacity: 1;')
        img.setAttribute("style", 'width: 19vw')
        break

        case 2: 
        description.innerText = "Information about the thing in the chat";
        img.setAttribute("style", 'width: 17vw')
        break

        case 3: 
        description.innerText = "Spoiler alert";
        img.setAttribute("style", 'width: 29vw')
        break

        case 4: 
        description.innerText = "Chat Color Change";
        img.setAttribute("style", 'width: 40vw')
        break

        case 5: 
        description.innerText = "Signing items";
        img.setAttribute("style", 'width: 35vw')
        break

        case 6: 
        description.innerText = "Markers";
        img.setAttribute("style", 'width: 38vw')
        break
            
    }
    console.log(value);
    img.setAttribute("src", `../examples/${value}.gif`);
    example.setAttribute("style", `background-image: url(../examples/${value}.gif);`);
}

function left() {
    value --- 1;
    if (value < 1) {
        value = max;
    }
    switch (value) {
        case 1: 
        description.innerText = "Chat overhead";
        description.setAttribute('style', 'opacity: 1;')
        img.setAttribute("style", 'width: 19vw')
        break

        case 2: 
        description.innerText = "Information about the thing in the chat";
        img.setAttribute("style", 'width: 17vw')
        break

        case 3: 
        description.innerText = "Spoiler alert";
        img.setAttribute("style", 'width: 29vw')
        break

        case 4: 
        description.innerText = "Chat Color Change";
        img.setAttribute("style", 'width: 40vw')
        break

        case 5: 
        description.innerText = "Signing items";
        img.setAttribute("style", 'width: 35vw')
        break

        case 6: 
        description.innerText = "Markers";
        img.setAttribute("style", 'width: 38vw')
        break
            
    }
    console.log(value);
    img.setAttribute("src", `../examples/${value}.gif`);
    example.setAttribute("style", `background-image: url(../examples/${value}.gif);`);
}



img.setAttribute("src", `../examples/${value}.gif`);
example.setAttribute("style", `background-image: url(../examples/${value}.gif);`);