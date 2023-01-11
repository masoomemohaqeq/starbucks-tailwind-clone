// Hamburger
let hamburgerToggler = document.getElementById("hamburger-toggler");
let menuWrapper = document.getElementById("menu-wrapper");

hamburgerToggler.addEventListener("change", () => {
  hamburgerToggler.checked
    ? menuWrapper.classList.add("show")
    : menuWrapper.classList.remove("show");
});

// let closeInner = document.getElementsByName("close-inner-level");
// let closeInnerText = document.getElementsByName("close-inner-level-text");

// let innerLevelTogglers = document.getElementsByName("inner-level-toggler");

// innerLevelTogglers.addEventListener("change", () => {
//     this.checked
//   this.closest();
// });
