function mostrarCamposPago() {
  const formaPago = document.getElementById('formaPago').value;
  const datosTarjeta = document.getElementById('datosTarjeta');
  datosTarjeta.style.display = (formaPago === 'Tarjeta') ? 'block' : 'none';
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const nombrePropiedad = params.get("propiedad") || "Propiedad Seleccionada";
  document.getElementById("propiedadNombre").textContent = nombrePropiedad;

  // Validación en tiempo real para el número de tarjeta (solo 16 dígitos)
  const numTarjeta = document.getElementById("numeroTarjeta");
  numTarjeta.addEventListener("input", () => {
    numTarjeta.value = numTarjeta.value.replace(/\D/g, "").slice(0, 16);
  });

  // Validación en tiempo real para CVV (solo 3 dígitos)
  const cvv = document.getElementById("cvv");
  cvv.addEventListener("input", () => {
    cvv.value = cvv.value.replace(/\D/g, "").slice(0, 3);
  });
});

function procesarPago() {
  const nombre = document.getElementById('nombre').value.trim();
  const formaPago = document.getElementById('formaPago').value;

  if (nombre === '' || formaPago === '') {
    alert('Por favor completa tu nombre y selecciona una forma de pago.');
    return;
  }

  if (formaPago === 'Tarjeta') {
    const tarjetaNombre = document.getElementById('tarjetaNombre').value.trim();
    const numeroTarjeta = document.getElementById('numeroTarjeta').value.trim();
    const exp = document.getElementById('exp').value;
    const cvv = document.getElementById('cvv').value.trim();

    if (tarjetaNombre === '' || numeroTarjeta === '' || exp === '' || cvv === '') {
      alert('Por favor llena todos los campos de la tarjeta.');
      return;
    }

    if (!/^\d{16}$/.test(numeroTarjeta)) {
      alert('El número de tarjeta debe tener exactamente 16 dígitos numéricos.');
      return;
    }

    if (!/^\d{3}$/.test(cvv)) {
      alert('El CVV debe tener exactamente 3 dígitos numéricos.');
      return;
    }
  }

  generarPDF(nombre, formaPago);
}

function generarPDF(nombre, formaPago) {
  const propiedad = document.getElementById('propiedadNombre').textContent;
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Documento de Escritura", 20, 20);

  doc.setFontSize(12);
  doc.text(`Propiedad: ${propiedad}`, 20, 40);
  doc.text(`Comprador: ${nombre}`, 20, 50);
  doc.text(`Forma de Pago: ${formaPago}`, 20, 60);
  doc.text(`Fecha: ${new Date().toLocaleDateString()}`, 20, 70);

  doc.save("escritura_alehouse.pdf");
}
