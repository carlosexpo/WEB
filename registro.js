document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el envío real

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const vehiculo = document.getElementById("vehiculo").value;
    const mensaje = document.getElementById("mensaje").value;

    // Usar jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Registro a Libro Azul", 20, 20);

    doc.setFontSize(12);
    doc.text(`Nombre: ${nombre}`, 20, 40);
    doc.text(`Correo: ${correo}`, 20, 50);
    doc.text(`Teléfono: ${telefono}`, 20, 60);
    doc.text(`Vehículo: ${vehiculo}`, 20, 70);
    doc.text("Mensaje:", 20, 80);

    const mensajeFormateado = doc.splitTextToSize(mensaje, 160);
    doc.text(mensajeFormateado, 20, 90);

    doc.save(`Registro_${nombre.replace(/\s/g, "_")}.pdf`);
  });
});
