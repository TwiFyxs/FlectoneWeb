function incrementCounter() {
    // Создаем объект XMLHttpRequest для отправки запроса на сервер
    var xhr = new XMLHttpRequest();
    
    // Устанавливаем обработчик события изменения состояния запроса
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Обновляем содержимое элемента счетчика на странице
            setCounterValue(xhr.responseText);
        }
    };
    
    // Отправляем GET-запрос на файл-обработчик счетчика
    xhr.open("GET", "increment_counter.php", true);
    xhr.send();
}

function updateCounter() {
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            setCounterValue(xhr.responseText);
        }
    };
    
    xhr.open("GET", "download_count.txt", true);
    xhr.send();
}

function setCounterValue(value) {
    document.getElementById("counter").innerHTML = 'Загрузок '+  value;
}

window.addEventListener("load", (event) => {
    updateCounter();
});
