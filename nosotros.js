// Datos en formato tipo JSON
const infoAlehouse = {
  mision: "Conectar personas con su hogar ideal de manera sencilla y confiable.",
  vision: "Ser líderes en el mercado inmobiliario digital en México.",
  valores: [
    "Confianza",
    "Transparencia",
    "Compromiso"
  ]
};

// Escuchar eventos de selección
document.addEventListener("DOMContentLoaded", () => {
  const radios = document.querySelectorAll("input[name='info']");
  const infoBox = document.getElementById("infoContenido");

  radios.forEach(radio => {
    radio.addEventListener("change", () => {
      const seleccion = radio.value;

      if (seleccion === "valores") {
        const lista = infoAlehouse.valores.map(v => `<li>${v}</li>`).join("");
        infoBox.innerHTML = `<h3>Valores</h3><ul>${lista}</ul>`;
      } else {
        const titulo = seleccion.charAt(0).toUpperCase() + seleccion.slice(1);
        infoBox.innerHTML = `<h3>${titulo}</h3><p>${infoAlehouse[seleccion]}</p>`;
      }
    });
  });
});
