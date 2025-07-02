document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".lightbox-trigger").forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightboxCaption.textContent = img.alt;
      lightbox.classList.remove("hidden");
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.classList.add("hidden");
  });

  // Fechar ao clicar fora da imagem
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.add("hidden");
    }
  });
});
