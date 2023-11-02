const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");


console.log(navBtn);
navBtn.addEventListener("click", () => {
    links.classList.toggle("show-links");
});