document.querySelector('form').addEventListener('submit', async e => {
  e.preventDefault(); // Evitar envío normal

  const form = e.target;
  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      alert('¡Mensaje enviado! Gracias por contactarnos.');
      form.reset();
    } else {
      alert('Hubo un error al enviar el mensaje.');
    }
  } catch (error) {
    alert('Error al enviar el formulario: ' + error.message);
  }
});
