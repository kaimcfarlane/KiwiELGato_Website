const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navigationitems");
let button = document.getElementById("expandbtn");

button.addEventListener("click", function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    console.log("it works");
});
