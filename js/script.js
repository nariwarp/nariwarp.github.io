const header = document.querySelector("header");
window.addEventListener(
  "scroll",
  function headerEffect() {
    if (window.scrollY > 50) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  },
  { passive: true }
);