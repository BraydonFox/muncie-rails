const menuButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const pageContent = document.getElementsByClassName('page-content')[0];


menuButton.addEventListener("click", () => {
    pageContent.style.display = pageContent.style.display == "none" ? "block" : "none";
    navbarLinks.classList.toggle("active");
});