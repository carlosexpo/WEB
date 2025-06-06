const slides = [
  {
    imgId: "carousel-image-1",
    title: "Ford F-100",
    description: "Un clásico pickup que marcó época."
  },
  {
    imgId: "carousel-image-2",
    title: "Leyendas Clásicas",
    description: "Nuestra imagen representativa de la marca."
  },
  {
    imgId: "carousel-image-3",
    title: "Cadillac 1955",
    description: "El lujo americano en su máxima expresión."
  },
  {
    imgId: "carousel-image-4",
    title: "Porsche 911 1969",
    description: "Un ícono deportivo que nunca pasa de moda."
  },
  {
    imgId: "carousel-image-5",
    title: "Volkswagen Beetle",
    description: "El escarabajo que conquistó el mundo."
  }
];

let currentIndex = 0;

const titleElement = document.getElementById("carousel-title");
const descriptionElement = document.getElementById("carousel-description");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateCarousel() {
  // Ocultar todas las imágenes
  slides.forEach(slide => {
    document.getElementById(slide.imgId).classList.remove("active");
  });

  // Mostrar la imagen actual
  const currentSlide = slides[currentIndex];
  document.getElementById(currentSlide.imgId).classList.add("active");

  // Actualizar texto
  titleElement.textContent = currentSlide.title;
  descriptionElement.textContent = currentSlide.description;
}

// Botones
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

// Inicializar
updateCarousel();
