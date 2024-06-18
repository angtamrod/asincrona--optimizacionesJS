//De esta forma se asegura que el DOM esté completamente cargado antes de agregar los event listeners.
document.addEventListener('DOMContentLoaded', () => {
    const listaBotones = document.querySelector(".tabs-buttons");
    const listaContenidos = document.querySelectorAll(".tabs-contenido"); 

//He reducido los addEventListener con un único addEventListener en .acordeon que controla todos los clicks en los .acordeon__header.

    listaBotones.addEventListener('click', (event) => {
        const boton = event.target.closest(".tabs-button");
        //Se han optimizado los condicionales.
        if (!boton) return;

        const id = boton.dataset.tab;
        const target = document.getElementById(id);

        if (!target) return;

        //Uso de funciones flecha para simplificar el código.
        listaContenidos.forEach(pagina => pagina.classList.remove("u-visible"));
        listaBotones.querySelectorAll(".tabs-button").forEach(boton => boton.classList.remove("button-active"));

        
        target.classList.add("u-visible");
        boton.classList.add("button-active");
    });
});