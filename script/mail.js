document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Obtener valores del formulario
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Validar campos
  if (!name || !email || !message) {
    showAlert("Please fill all required fields", "danger");
    return;
  }

  // Construir el cuerpo del correo
  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage:%0D%0A${message}%0D%0A%0D%0A
          ---%0D%0A Sent from Magestic Cleaning Website`;

  // Crear el enlace mailto
  const mailtoLink = `mailto:magesticleaningsc@gmail.com?subject=Contact%20Request&body=${body}&cc=${email}`;

  // Abrir cliente de correo
  window.open(mailtoLink, "_blank");

  // Resetear formulario y mostrar feedback
  this.reset();
  showAlert("Email client opened! Please send the pre-filled email", "success");
});

function showAlert(message, type) {
  const alert = document.getElementById("formAlert");
  alert.textContent = message;
  alert.className = `alert alert-${type}`;
  alert.classList.remove("d-none");

  setTimeout(() => {
    alert.classList.add("d-none");
  }, 5000);
}
