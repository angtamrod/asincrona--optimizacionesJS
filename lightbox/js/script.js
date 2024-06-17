
const mainImage = document.getElementById('main-image');
    const containerLightbox = document.getElementById(`containerLightbox`);
    const imageLightbox = document.getElementById(`imageLightbox`);
    const imageCancel = document.getElementById(`imageCancel`);
    
    mainImage.addEventListener('click', openLightbox);
    imageCancel.addEventListener(`click`, closeLightbox);
  
        
    function openLightbox() {
            let imgSrc = document.getElementById('main-image').getAttribute('src');
            imageLightbox.setAttribute('src', imgSrc);
            containerLightbox.style.display = "block";
        }
          
        
    function closeLightbox() {
            containerLightbox.style.display = "none";
        }
    