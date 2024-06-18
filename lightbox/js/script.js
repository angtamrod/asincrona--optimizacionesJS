document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('main-image');
    const containerLightbox = document.getElementById('containerLightbox');
    const imageLightbox = document.getElementById('imageLightbox');
    const imageCancel = document.getElementById('imageCancel');

    mainImage.addEventListener('click', () => {
        imageLightbox.src = mainImage.src;
        containerLightbox.style.display = 'block';
    });

    imageCancel.addEventListener('click', () => {
        containerLightbox.style.display = 'none';
    });
});