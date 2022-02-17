const menuButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const mainContent = document.getElementsByClassName('main-content')[0];


menuButton.addEventListener("click", () => {
    mainContent.style.display = mainContent.style.display == "none" ? "block" : "none";
    navbarLinks.classList.toggle("active");
});

navbarLinks.addEventListener("click", () => {
    mainContent.style.display = "block";
    navbarLinks.classList.toggle("active");
})