//Selectors
const hamburguerMenu = document.querySelector(".hamburguer-menu");

//Event Listeners
hamburguerMenu.addEventListener("click", () => {
  let x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
});
