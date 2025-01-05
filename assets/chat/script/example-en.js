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
        description.innerText = "Chat bubble";
        description.setAttribute('style', 'opacity: 1;')
        img.setAttribute("style", 'width: 19vw')
        break

        case 2: 
        description.innerText = "Information about the item in chat";
        img.setAttribute("style", 'width: 17vw')
        break

        case 3: 
        description.innerText = "Spoiler";
        img.setAttribute("style", 'width: 29vw')
        break

        case 4: 
        description.innerText = "Changing the chat color";
        img.setAttribute("style", 'width: 40vw')
        break

        case 5: 
        description.innerText = "Signing of items";
        img.setAttribute("style", 'width: 35vw')
        break

        case 6: 
        description.innerText = "Markers";
        img.setAttribute("style", 'width: 38vw')
        break
            
    }

    img.setAttribute("src", `../../assets/chat/images/${value}.gif`);
    example.setAttribute("style", `background-image: url(../../assets/chat/images/${value}.gif);`);
}

function left() {
    value--;

    if (value < 1) {
        value = max;
    }

    switch (value) {
        case 1: 
        description.innerText = "Чат над головой";
        img.setAttribute("style", 'width: 19vw')
        break

        case 2: 
        description.innerText = "Информация о вещи в чате";
        img.setAttribute("style", 'width: 17vw')
        break

        case 3: 
        description.innerText = "Спойлер";
        img.setAttribute("style", 'width: 29vw')
        break

        case 4: 
        description.innerText = "Смена цвета чата";
        img.setAttribute("style", 'width: 40vw')
        break

        case 5: 
        description.innerText = "Подписание предметов";
        img.setAttribute("style", 'width: 35vw')
        break

        case 6: 
        description.innerText = "Метки";
        img.setAttribute("style", 'width: 38vw')
        break
    }

    img.setAttribute("src", `../../assets/chat/images/${value}.gif`);
    example.setAttribute("style", `background-image: url(../../assets/chat/images/${value}.gif);`);
}

img.setAttribute("src", `./assets/chat/images/${value}.gif`);
example.setAttribute("style", `background-image: url(../../assets/chat/images/${value}.gif);`);