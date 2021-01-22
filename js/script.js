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
});
