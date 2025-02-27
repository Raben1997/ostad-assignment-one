const toggleMenuBtn = document.getElementById("toggleMenuBtn");
const navMenu = document.getElementById("navMenu");
toggleMenuBtn.addEventListener("click", function () {
  toggleMenuBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
});

