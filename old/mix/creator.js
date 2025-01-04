let load = document.getElementById("load");

for (let i = 0; i < 20; i++) { // выведет 0, затем 1, затем 2
    let loading = document.createElement("span");
    loading.innerHTML = `<div class="square"><div class="blick"></div></div><div class="lines"><div class="line l1"><div class="blick"></div></div><div class="line l2"><div class="blick"></div></div></div>`;
    loading.classList.add("loading");

    load.appendChild(loading);

}