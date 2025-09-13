// Toggle search bar animation
const searchIcon = document.querySelector(".search-icon");
const searchContainer = document.querySelector(".search-container");

searchIcon.addEventListener("click", () => {
  searchContainer.classList.toggle("active");
  const input = searchContainer.querySelector(".search-bar");
  if (searchContainer.classList.contains("active")) {
    input.focus();
  }
});
