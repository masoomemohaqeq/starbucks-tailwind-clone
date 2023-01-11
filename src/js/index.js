// Hamburger
let hamburgerToggler = document.getElementById("hamburger-toggler");
let menuWrapper = document.getElementById("menu-wrapper");

hamburgerToggler.addEventListener("change", () => {
  hamburgerToggler.checked
    ? menuWrapper.classList.add("show")
    : menuWrapper.classList.remove("show");
});
