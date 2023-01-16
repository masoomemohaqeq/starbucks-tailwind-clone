// Hamburger
let hamburgerToggler = document.getElementById("hamburger-toggler");
let menuWrapper = document.getElementById("menu-wrapper");
let body = document.querySelector("body");

hamburgerToggler.addEventListener("change", () => {
  if (hamburgerToggler.checked) {
    menuWrapper.classList.add("show");
    body.classList.add("noScroll");
  } else {
    menuWrapper.classList.remove("show");
    body.classList.remove("noScroll");
  }
});

//Moving Animation for size
let sizeRd = document.getElementsByName("size");
let short = document.getElementById("short");
let tall = document.getElementById("tall");
let grande = document.getElementById("grande");
let venti = document.getElementById("venti");
let movingAnim = document.getElementById("moving-anim");

sizeRd.forEach((rd) => {
  rd.addEventListener("change", () => {
    short.checked && (movingAnim.style.left = "16.666667%");
    tall.checked && (movingAnim.style.left = "33.333334%");
    grande.checked && (movingAnim.style.left = "50%");
    venti.checked && (movingAnim.style.left = "66.666668%");
  });
});
