const expandIcon = document.getElementById("expand");
const bigImage = document.querySelector(".big__img");
const backIcon = document.querySelector(".big__img--reset");
const gallery = document.getElementById("gallery__grid");
const galleryImg = document.querySelectorAll("#gallery__grid li");
expandIcon.addEventListener("click", () => {
  bigImage.style.visibility = "visible";
  bigImage.style.opacity = 1;
});
backIcon.addEventListener("click", () => {
  bigImage.style.visibility = "hidden";
  bigImage.style.opacity = 0;
});
function getGalleryHeight() {
  let elMargin = getComputedStyle(galleryImg[0]).marginBottom;
  let galleryHeight;
  let width = window.innerWidth;
  if (width > 1198) {
    galleryHeight =
      Math.ceil(galleryImg.length / 4) * galleryImg[0].clientHeight + elMargin;
  } else if (1198 > width > 720) {
    galleryHeight = Math.ceil(galleryImg.length / 3) + elMargin;
  } else if (720 > width > 500) {
    galleryHeight = Math.ceil(galleryImg.length / 2) + elMargin;
  } else if (width < 500) {
    galleryHeight = Math.ceil(galleryImg.length / 1) + elMargin;
  }
  gallery.style.height = galleryHeight + "px";
}
getGalleryHeight();
