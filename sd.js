const carouselImages = document.querySelector('.carousel-images');
let index = 0;

function moveCarousel() {
    index++;
    if (index >= carouselImages.children.length) {
        index = 0;
    }
    carouselImages.style.transform = `translateX(${-index * 300}px)`;
}

setInterval(moveCarousel, 3000); // Cambia cada 3 segundos

window.onload = () => {
    const contenedores = document.querySelectorAll('.contenedor-flex');
    contenedores.forEach(contenedor => contenedor.classList.add('visible'));
};
