const menuIcon = document.querySelector(".header__menu-icon");
const menu = document.querySelector(".header__nav");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("header__nav_active");
});
