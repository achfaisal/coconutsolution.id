document.addEventListener("DOMContentLoaded", () => {
  const bigImage = document.getElementById("bigImage");
  const smallImages = document.querySelectorAll(".small-image");

  smallImages.forEach((smallImage) => {
    smallImage.addEventListener("click", () => {
      const newSrc = smallImage.getAttribute("src");
      bigImage.src = newSrc;
    });
  });
});
