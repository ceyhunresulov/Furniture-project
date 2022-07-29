const chilSlides = document.querySelector(".child__slides");
const angleLeft = document.querySelector(".child__angle--left");
const angleRight = document.querySelector(".child__angle--right");

angleLeft.addEventListener("click", () => {
  console.log("salam");
  chilSlides.style.left = -1200 + "px";
});
