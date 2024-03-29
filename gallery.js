const expandIcon = document.getElementById("expand");
const bigImage = document.querySelector(".big__img");
const backIcon = document.querySelector(".big__img--reset");
const gallery = document.getElementById("gallery__grid");
const galleryPlus = document.getElementById("gallery__plus");
const galleryImg = document.querySelectorAll("#gallery__grid li");
let elMargin = parseFloat(getComputedStyle(galleryImg[0]).marginBottom);
let heightItem;
let authHeight = changeRow().y;
let row = changeRow().x;

// expand image
expandIcon.addEventListener("click", () => {
  bigImage.style.visibility = "visible";
  bigImage.style.opacity = 1;
});
backIcon.addEventListener("click", () => {
  bigImage.style.visibility = "hidden";
  bigImage.style.opacity = 0;
});

// gallery height
galleryPlus.addEventListener("click", () => {
  if (
    heightItem - (row * galleryImg[0].clientHeight + row * elMargin) >=
    authHeight * galleryImg[0].clientHeight + authHeight * elMargin
  ) {
    row += authHeight;
    getGalleryHeight();
  } else if (
    heightItem - (row * galleryImg[0].clientHeight + row * elMargin) >
    -5
  ) {
    gallery.style.height = heightItem + "px";
  }
});
function getGalleryHeight() {
  let galleryHeight;
  let width = window.innerWidth;
  if (width > 1198) {
    heightItem =
      Math.ceil(galleryImg.length / 4) * galleryImg[0].clientHeight +
      Math.ceil(galleryImg.length / 4) * elMargin;
    galleryHeight = row * galleryImg[0].clientHeight + row * elMargin;
  } else if (1198 > width && width > 720) {
    heightItem =
      Math.ceil(galleryImg.length / 3) * galleryImg[0].clientHeight +
      Math.ceil(galleryImg.length / 3) * elMargin;
    galleryHeight = row * galleryImg[0].clientHeight + row * elMargin;
  } else if (720 > width && width > 500) {
    heightItem =
      Math.ceil(galleryImg.length / 2) * galleryImg[0].clientHeight +
      Math.ceil(galleryImg.length / 2) * elMargin;
    galleryHeight = row * galleryImg[0].clientHeight + row * elMargin;
  } else if (width <= 500) {
    heightItem =
      Math.ceil(galleryImg.length / 1) * galleryImg[0].clientHeight +
      Math.ceil(galleryImg.length / 1) * elMargin;
    galleryHeight = row * galleryImg[0].clientHeight + row * elMargin;
  }
  gallery.style.height = galleryHeight + "px";
}
getGalleryHeight();

function changeRow() {
  let width = window.innerWidth;
  let x;
  let y;
  if (width > 720) {
    y = 5;
    x = 5;
  } else if (720 > width && width > 500) {
    y = 10;
    x = 10;
  } else if (width <= 500) {
    y = 20;
    x = 20;
  }
  return {
    x,
    y,
  };
}
