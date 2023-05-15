//Instance variables
let loadWheel = document.querySelector(".loadWheel")
let contentPage = document.querySelector(".contentPage")
let span = document.querySelector("span")

//Website Landing Page Animation
window.onload=()=>
{
    setInterval(wheelAnimation, 3700)
}

//Landing Page End Animation
function wheelAnimation() {
    contentPage.style.opacity = "1"; 
    loadWheel.style.display = "none";
}