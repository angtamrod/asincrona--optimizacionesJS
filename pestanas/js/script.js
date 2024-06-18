
document.addEventListener('DOMContentLoaded', () => {
    const listaBotones = document.querySelector(".tabs-buttons");
    const listaContenidos = document.querySelectorAll(".tabs-contenido"); 

    listaBotones.addEventListener('click', (event) => {
        const boton = event.target.closest(".tabs-button");

        if (!boton) return;

        const id = boton.dataset.tab;
        const target = document.getElementById(id);

        if (!target) return;

        
        listaContenidos.forEach(pagina => pagina.classList.remove("u-visible"));
        listaBotones.querySelectorAll(".tabs-button").forEach(boton => boton.classList.remove("button-active"));

        
        target.classList.add("u-visible");
        boton.classList.add("button-active");
    });
});