// Fonction pour initialiser un carrousel avec un ID spécifique
function initializeCarousel(carouselId) {
  let currentPosition = 0;
  const itemsPerSlide = 3;
  const carousel = document.getElementById(carouselId);
  const carouselInner = carousel.querySelector('.carousel-inner');
  const totalItems = carousel.querySelectorAll('.carousel-item').length;
  const totalSlides = Math.ceil(totalItems / itemsPerSlide);

  // Fonction pour déplacer le carrousel
  function moveCarousel(direction) {
    currentPosition += direction;
    if (currentPosition < 0) {
      currentPosition = totalSlides - 1;
    } else if (currentPosition >= totalSlides) {
      currentPosition = 0;
    }
    updateCarousel();
  }

  // Fonction pour définir la position d'un carrousel spécifique
  function setPosition(position) {
    currentPosition = position;
    updateCarousel();
  }

  // Fonction pour mettre à jour la position du carrousel (déplacement horizontal)
  function updateCarousel() {
    const offset = -currentPosition * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
    updateIndicators();
  }

  // Fonction pour mettre à jour les indicateurs de position
  function updateIndicators() {
    const indicators = carousel.querySelectorAll('.carousel-indicators span');
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentPosition);
    });
  }

  // Initialisation des événements pour ce carrousel
  const leftButton = carousel.querySelector('.carousel-control.left');
  const rightButton = carousel.querySelector('.carousel-control.right');
  leftButton.onclick = () => moveCarousel(-1);
  rightButton.onclick = () => moveCarousel(1);

  // Initialisation des indicateurs
  const indicators = carousel.querySelectorAll('.carousel-indicators span');
  indicators.forEach((indicator, index) => {
    indicator.onclick = () => setPosition(index);
  });

  // Configuration initiale
  updateCarousel();
}

// Initialiser tous les carrousels
document.querySelectorAll('.carousel').forEach(carousel => {
  const carouselId = carousel.id;  // Utilisation de l'ID du carrousel
  initializeCarousel(carouselId);
});