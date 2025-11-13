// Animação da barra de progresso
document.addEventListener("DOMContentLoaded", () => {
  const barra = document.getElementById("progresso");
  setTimeout(() => {
    barra.style.width = "70%";
  }, 500);
});
