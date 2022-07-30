const childSlides = document.querySelector(".child__slides");
const angleLeft = document.querySelector(".child__angle--left");
const angleRight = document.querySelector(".child__angle--right");
const left = (childSlides.style.left = 0);

angleLeft.addEventListener("click", () => {
  console.log(left);
  if (left > 0) {
    left = `${position}px`;
  }
});
angleRight.addEventListener("click", () => {
  console.log("salam");
  position = position + 1215;
  childSlides.style.left = `${position}px`;
});
