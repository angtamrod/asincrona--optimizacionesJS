
const listaBotones = document.querySelectorAll(".tabs-button");
const listaContenidos = document.querySelectorAll(".tabs-contenido"); 

        listaBotones.forEach(boton =>{
            boton.addEventListener("click", ()=>{

                //PRIMERA FORMA
                //const id = boton.getAttribute("data-tab");//Sirve para leer cualquier propiedad de cualquier elemento en este caso es el data-tab pero podría ser el id o la clase
                //alert(id);
                //ESTO ES OTRO METODO ATTRIBUTE: boton.setAttribute("caja", "importante") Esto sirve para añadir un atributo al elemento

                //SEGUNDA FORMA
                const id = boton.dataset.tab;
                const target = document.getElementById(id);
                //alert(id);
                //quito el u-visible de todas las páginas
                listaContenidos.forEach(pagina => {
                    pagina.classList.remove("u-visible");
                });
                //le quito el button-active de todos los botones
                listaBotones.forEach(boton =>{
                    boton.classList.remove("button-active");
                })
                //agrego la clase u-visible al que le hice click
                target.classList.add("u-visible");
                
                //agregar la clase de button-active al que le hice click
                boton.classList.add("button-active");


            });
        });