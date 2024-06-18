
const acordeon = document.querySelector(".acordeon");
const acordeonItems = acordeon.querySelectorAll(".acordeon__item");

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