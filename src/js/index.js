// Hamburger
let hamburgerToggler = document.getElementById("hamburger-toggler");
let menuWrapper = document.getElementById("menu-wrapper");

hamburgerToggler.addEventListener("change", () => {
  hamburgerToggler.checked
    ? menuWrapper.classList.add("show")
    : menuWrapper.classList.remove("show");
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
