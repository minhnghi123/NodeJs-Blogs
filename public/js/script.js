const button = document.querySelector(".searchBtn");
const searchBar = document.querySelector(".searchBar");
const searchInput = document.getElementById("searchInput");
const searchClose = document.getElementById("searchClose");

button.addEventListener("click", () => {
  searchBar.style.visibility = "visible";
  searchBar.classList.add("open");
  this.setAttribute("aria-expanded", "true");
  searchInput.focus();
});

searchClose.addEventListener("click", () => {
  searchBar.style.visibility = "hidden";
  searchBar.classList.remove("open");
  this.setAttribute("aria-expanded", "false");
});
