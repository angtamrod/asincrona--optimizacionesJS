//De esta forma se asegura que el DOM esté completamente cargado antes de agregar los event listeners.
document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('mainImage');
    const containerLightbox = document.getElementById('containerLightbox');
    const imageLightbox = document.getElementById('imageLightbox');
    const imageCancel = document.getElementById('imageCancel');

    //Accedemos directamente a la propiedad del elemento con el "src" en vez de utilizar setAttribute y getAttribute
    mainImage.addEventListener('click', () => {
        imageLightbox.src = mainImage.src;
        containerLightbox.style.display = 'block';
    });

    imageCancel.addEventListener('click', () => {
        containerLightbox.style.display = 'none';
    });
});