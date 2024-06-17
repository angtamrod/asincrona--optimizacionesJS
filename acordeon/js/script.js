//PASO 1: Declarar variables y elementos
const acordeon = document.querySelector(".acordeon");
const headers = document.querySelectorAll(".acordeon__header");
const acordeonItems = document.querySelectorAll(".acordeon__item");

//PASO 2: Nuestras funciones
headers.forEach(header => {
    header.addEventListener("click", ()=>{

        const item = header.closest(".acordeon__item");
        //cerrar todos los content (quitar el active)
        cerrarTodas();
        //abrir el content al que le hice click (agregar (active))
        item.classList.toggle("active");
    });
});

function cerrarTodas(){
    acordeonItems.forEach( elemento => {
            elemento.classList.remove("active");
        });
}
//PASO 3: Ejecutar nuestro código
//acordeonItems[0].classList.add(`active`);
headers[0].click();//El click solo funciona si hemos puesto un addEventListener anteriormente

