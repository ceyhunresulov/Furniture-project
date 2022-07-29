const expandIcon = document.getElementById("expand");
const bigImage = document.querySelector(".big__img");
const backIcon = document.querySelector(".big__img--reset");
expandIcon.addEventListener("click", () => {
  bigImage.style.visibility = "visible";
  bigImage.style.opacity = 1;
});
backIcon.addEventListener("click", () => {
  bigImage.style.visibility = "hidden";
  bigImage.style.opacity = 0;
});
