const toggleHamburgerButton = document.querySelector(".hamburger-container");
const dropDownMenu = document.querySelector(".dropdown-menu");

function toggleHamburger() {
  toggleHamburgerButton.classList.toggle("active");
  dropDownMenu.classList.toggle("open");
}
