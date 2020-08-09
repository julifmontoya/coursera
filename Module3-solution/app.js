//Selectors
const hamburguerMenu = document.getElementById("hamburguer-menu");
const closeNav = document.querySelector(".closeNav");
const mySidenav = document.getElementById("mySidenav");

//Event Listeners
hamburguerMenu.addEventListener("click", () => {
  mySidenav.style.width = "250px";
});

closeNav.addEventListener("click", () => {
  mySidenav.style.width = "0";
});
