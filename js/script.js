window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu"),
    menuItem = document.querySelectorAll(".menu_item"),
    btn = document.querySelector(".btn");

  btn.addEventListener("click", () => {
    btn.classList.toggle("btn_active");
    menu.classList.toggle("menu_active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      btn.classList.toggle("btn_active");
      menu.classList.toggle("menu_active");
    });
  });

  var slides = document.querySelectorAll(".sliders .slide");
  var currentSlide = 0;

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function previousSlide() {
    goToSlide(currentSlide - 1);
  }

  function goToSlide(n) {
    slides[currentSlide].className = "slide";
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = "slide active";
  }

  var next = document.getElementById("next");
  var previous = document.getElementById("prev");

  next.onclick = function () {
    nextSlide();
  };

  previous.onclick = function () {
    previousSlide();
  };
});
