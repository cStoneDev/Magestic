// Smooth scroll con offset ajustado
document.querySelectorAll('.navbar-nav a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      // Ajusta estos valores según necesites
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      const additionalOffset = 0; // Espacio adicional en pixeles

      const targetPosition =
        targetElement.offsetTop - navbarHeight - additionalOffset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});
