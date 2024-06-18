// Aquí aplicamos la optimización para no utilizar tantas veces documnt.querySelector, como hemos seleccionado antes una caja padre, utilizamos esa misma constante para seleccionas acordeonItems
const acordeon = document.querySelector(".acordeon");
const acordeonItems = acordeon.querySelectorAll(".acordeon__item");

//He reducido los addEventListener con un único addEventListener en .acordeon que controla todos los clicks en los .acordeon__header.
acordeon.addEventListener("click", (event) => {
    const header = event.target.closest(".acordeon__header");
    
    if (header) {
        const item = header.closest(".acordeon__item");
        cerrarTodas();
        item.classList.toggle("active");
    }
});

function cerrarTodas() {
    acordeonItems.forEach(elemento => {
        elemento.classList.remove("active");
    });
}

acordeonItems[0].classList.add("active");