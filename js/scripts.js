// 1. Alerta de bienvenida (solo una vez por sesión)
if (!sessionStorage.getItem("bienvenida-mostrada")) {
  alert("¡Bienvenido a Ferretería Cuscatlán Empresas!");
  sessionStorage.setItem("bienvenida-mostrada", "sí");
}

// 2. Scroll suave al hacer clic en enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener("click", function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute("href"));
    if (destino) {
      destino.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// 3. Mensaje en consola (útil para depuración)
console.log("Script cargado correctamente: Ferretería Cuscatlán Empresas");

// Menú responsive: toggle hamburguesa
document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});

// Menú responsive: abrir y cerrar al hacer clic
document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});

