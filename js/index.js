document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("header-scroll-btn")
    .addEventListener("click", function () {
      const mainSection = document.getElementById("main-section");
      mainSection.style.display = "block";

      const sectionLetter = document.getElementById("letter");
      sectionLetter.style.display = "block";

      mainSection.scrollIntoView({
        behavior: "smooth",
      });
    });
});
