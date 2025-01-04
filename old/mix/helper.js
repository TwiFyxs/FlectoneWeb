const main = document.querySelector(".preview");

document.getElementById("version").addEventListener("mouseover", () => {helper("version", "Выбор версии Minecraft, на которую устанавливаете сборку")});
document.getElementById("installerType").addEventListener("mouseover", () => {helper("installerType", "Выбор загрузчика модов (Fabric, Forge, Quilt)")});
document.getElementById("profile").addEventListener("mouseover", () => {helper("profile", "Создать профиль в лаунчере майнкрафта")});
document.getElementById("modsType").addEventListener("mouseover", () => {helper("modsType", "Выбор мода, на котором основана сборка")});
document.getElementById("bugs").addEventListener("mouseover", () => {helper("bugs", "Скачать сборку с нестабильными модами, которые могут вызывать ошибки в игре")});
document.getElementById("clearFolder").addEventListener("mouseover", () => {helper("clearFolder", 'Удалить все файлы .jar в выбранной папке')});
document.getElementById("settingMinecraft").addEventListener("mouseover", () => {helper("settingMinecraft", "Установить настроенные конфиги модов для оптимизации")});
document.getElementById("download").addEventListener("mouseover", () => {helper("download", "Установить выбранные вами моды")});
document.getElementById("path").addEventListener("mouseover", () => {helper("path", "Выбрать путь папки Minecraft")});
document.getElementById("update").addEventListener("mouseover", () => {helper("update", "Обновить выбранные вами моды")});
document.getElementById("search").addEventListener("mouseover", () => {helper("search", "Поиск модов")});
document.getElementById("pageSelect").addEventListener("mouseover", () => {helper("pageSelect", "Выбрать вкладку которая вам нужна<br> (Оптимизация, Моды, Ресурспаки, Датапаки, Фермы, Шейдеры, Плагины)")});
document.getElementById("selectAll").addEventListener("mouseover", () => {helper("selectAll", "Выбрать все предложенные объекты")});
document.getElementById("settings").addEventListener("mouseover", () => {helper("settings", "Настройки программы")});
document.getElementById("button").addEventListener("mouseover", () => {helper("button", "Сменить тему<br>(нажмите чтоб проверить)")});
function helper(name, text) {

    let type = document.getElementById(name);
    
    let helper = document.createElement("div")

    helper.addEventListener("focus", () => {console.log("", name, text);});

    helper.className = "helper";
    helper.innerHTML = `<h3>${text}</h3>`
    



    main.appendChild(helper);

    type.addEventListener("mouseout", async () => {
        helper.classList.add("concealment");
        helper.addEventListener("animationend", () => {
            main.removeChild(helper);
        })
        
    })
    
}

