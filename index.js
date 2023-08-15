const hamburger = document.getElementById("menu-icon");

const mobileNav = document.getElementById("mobile-nav-container");

const mobileCloseBtn = document.getElementById("close-icon");

hamburger.addEventListener("click", function () {
  mobileNav.classList.remove("hidden");
});

mobileCloseBtn.addEventListener("click", function () {
  mobileNav.classList.add("hidden");
});
