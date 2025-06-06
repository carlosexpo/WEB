// 🔹 Carrusel principal de autos

const slides = [
  {
    imgId: 'carousel-image',
    title: 'Ford Mustang 1967',
    description: 'Un ícono americano que representa el poder y la elegancia del diseño clásico.'
  },
  {
    imgId: 'carousel-image-2',
    title: 'Chevrolet Bel Air 1957',
    description: 'Un símbolo de la era dorada del automovilismo estadounidense.'
  }
];

let currentIndex = 0;

// 🔹 Elementos HTML del carrusel principal
const title = document.getElementById("carousel-title");
const description = document.getElementById("carousel-description");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// 🔹 Función para actualizar el carrusel principal
function updateCarousel() {
  slides.forEach(slide => {
    document.getElementById(slide.imgId).classList.remove('active');
  });

  const current = slides[currentIndex];
  document.getElementById(current.imgId).classList.add('active');
  title.textContent = current.title;
  description.textContent = current.description;
}

// 🔹 Eventos para avanzar y retroceder el carrusel principal
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

updateCarousel(); // Inicializar

// 🔹 Carrusel de exhibiciones

const exhibiciones = [
  {
    imgId: 'ex-image-1',
    title: 'Auto Show Retro',
    description: 'Una de nuestras exhibiciones más populares con autos clásicos de los 60s y 70s.'
  },
  {
    imgId: 'ex-image-2',
    title: 'Muscle Cars en Vivo',
    description: 'Vehículos icónicos estadounidenses rugiendo como en sus mejores tiempos.'
  },
  {
    imgId: 'ex-image-3',
    title: 'Expo Futuro Clásico',
    description: 'Prototipos modernos con potencial para convertirse en leyendas.'
  }
];

let exIndex = 0;

// 🔹 Elementos HTML del carrusel de exhibiciones
const exTitle = document.getElementById("ex-title");
const exDesc = document.getElementById("ex-description");
const nextExBtn = document.getElementById("nextExBtn");
const prevExBtn = document.getElementById("prevExBtn");

// 🔹 Función para actualizar el carrusel de exhibiciones
function updateExCarousel() {
  exhibiciones.forEach(ex => {
    document.getElementById(ex.imgId).classList.remove("active");
  });

  const currentEx = exhibiciones[exIndex];
  document.getElementById(currentEx.imgId).classList.add("active");
  exTitle.textContent = currentEx.title;
  exDesc.textContent = currentEx.description;
}

// 🔹 Eventos del carrusel de exhibiciones
nextExBtn.addEventListener("click", () => {
  exIndex = (exIndex + 1) % exhibiciones.length;
  updateExCarousel();
});

prevExBtn.addEventListener("click", () => {
  exIndex = (exIndex - 1 + exhibiciones.length) % exhibiciones.length;
  updateExCarousel();
});

updateExCarousel(); // Inicializar

// 🔹 Función para mostrar secciones dinámicamente
function mostrarSeccion(id) {
  document.querySelectorAll('.seccion').forEach(seccion => {
    seccion.classList.remove('activa');
  });
  document.getElementById(id).classList.add('activa');
}
